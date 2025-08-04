import { Dims, Img, FormattedItem, Orientation, Query, Vid } from "./_types";

// Define the structure of a Tumblr post based on API response examples
interface TumblrPost {
  id: number;
  blog_name: string;
  post_url: string;
  type: string; // e.g., "photo", "video", "text"
  timestamp: number;
  tags: string[];
  summary: string;
  title?: string;
  body?: string;
  photos?: Array<{
    alt_sizes: Array<{
      width: number;
      height: number;
      url: string;
    }>;
    original_size: {
      width: number;
      height: number;
      url: string;
    };
    caption: string;
  }>;
  video_url?: string;
  player?: Array<{
    width: number;
    embed_code: string;
  }>;
  // Add other relevant fields as needed
}

export function queryp(query: Query) {
  return Object.entries(query).map(([key, val]) => `${key}=${val}`).join("&");
}

async function format_tumblr_post(post: TumblrPost): Promise<FormattedItem> {
  let imgs: Img = { default: '', hires: '', album: [] };
  let vids: Vid = {};
  let dims: Dims = { width: 0, height: 0 };
  let is_video = false;
  let is_image = false;
  let url: string | undefined = post.post_url;

  if (post.type === "photo" && post.photos && post.photos.length > 0) {
    is_image = true;
    const best_photos = post.photos.map(photo => {
        let all_sizes = [...photo.alt_sizes];
        if (photo.original_size) {
            all_sizes.push(photo.original_size);
        }
        return all_sizes.reduce((prev, current) => (prev.width > current.width) ? prev : current);
    });

    const best_photo = best_photos[0];

    imgs = {
      default: best_photo.url,
      hires: best_photo.url,
      album: best_photos.map(p => ({
        default: p.url,
        hires: p.url,
        is_image: true,
        is_video: false,
        preview: {
          vid: {},
          img: {
            hires: p.url,
            default: p.url,
            album: [],
          },
        },
      })),
    };
    dims = { width: best_photo.width, height: best_photo.height };
    url = best_photo.url;
  } else if (post.type === "video" && post.video_url) {
    is_video = true;
    vids = {
      mp4: post.video_url,
      lores: post.video_url, // Assuming lores can be the same for now
    };
    // Try to get dimensions from player if available
    if (post.player && post.player.length > 0) {
      // This is a simplification, as embed code might not directly give dims
      // For now, we'll just use a placeholder or try to parse from embed_code if possible
      // For a real implementation, you'd need to parse the embed_code or fetch video metadata
      dims = { width: post.player[0].width, height: post.player[0].width * (9/16) }; // Assuming 16:9 aspect ratio
    }
    url = post.video_url;
  } else if (post.type === "text" && post.body) {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const foundImages = [];
    let match;
    while ((match = imgRegex.exec(post.body)) !== null) {
      foundImages.push(match[1]);
    }

    if (foundImages.length > 0) {
      is_image = true;
      const getHiResUrl = (url: string) => url.replace(/_\d{3,}\.(jpg|png|gif|webp)$/, '_1280.$1').replace(/\/s\d+x\d+\//, '/');
      const hiresImages = foundImages.map(getHiResUrl);

      imgs = {
        default: foundImages[0],
        hires: hiresImages[0],
        album: foundImages.map((imgUrl, i) => ({
          default: imgUrl,
          hires: hiresImages[i],
          is_image: true,
          is_video: false,
          preview: {
            vid: {},
            img: {
              hires: hiresImages[i],
              default: imgUrl,
              album: [],
            },
          },
        })),
      };
      // For now, we can't easily get dimensions from the body.
      dims = { width: 0, height: 0 }; 
      url = foundImages[0];
    } else {
        console.log(`[format_tumblr_post] Text post with no images. ID: ${post.id}`);
    }
  } else {
    // Log posts that are not identified as image or video
    console.log(`[format_tumblr_post] Post not identified as image/video. Type: ${post.type}, Post:`, post);
  }

  let orientation: Orientation = Orientation.Normal;
  if (dims.width && dims.height) {
    if ((dims.width / dims.height) <= 0.7) {
      orientation = Orientation.Portrait;
    } else if ((dims.width / dims.height) >= 1.7) {
      orientation = Orientation.Landscape;
    }
  }

  const nsfw_tags = ["nsfw", "adult", "mature", "18+", "explicit"];
  const is_nsfw = post.tags.some(tag => nsfw_tags.includes(tag.toLowerCase()));

  return {
    id: String(post.id),
    author: post.blog_name,
    authorp: `u/${post.blog_name}`,
    title: post.title || post.summary || "(no title)",
    thumbnail: is_image ? imgs.default : undefined, // Use first image as thumbnail
    subreddit: post.blog_name, // Using blog_name as subreddit equivalent
    subredditp: `t/${post.blog_name}`,
    permalink: post.post_url,
    over18: is_nsfw,
    is_video: is_video,
    is_image: is_image,
    is_album: is_image && imgs.album && imgs.album.length > 1,
    favorite: false,
    url: url,
    dims: dims,
    orientation: orientation,
    preview: { vid: vids, img: imgs },
  };
}

export async function get_tumblr_posts(url: string) {
  try {
    console.log("[get_tumblr_posts] API URL:", url);
    const res = await fetch(url);
    console.log("[get_tumblr_posts] Raw Response Object:", res);
    const data = await res.json();
    console.log("[get_tumblr_posts] Raw API Data:", data);
    console.log("[get_tumblr_posts] Raw API Data.response:", data.response);

    if (data.meta.status !== 200) {
      console.error("[get_tumblr_posts]: API error", data.meta.msg);
      return {
        posts: [],
        after: null,
        res: { ok: false, res: data.meta.msg },
      };
    }

    const rawPosts: TumblrPost[] = data.response.posts || data.response;
    console.log("[get_tumblr_posts] Raw Posts Array (before filtering):", rawPosts);
    rawPosts.forEach(post => console.log(`[get_tumblr_posts] Post Type: ${post.type}, ID: ${post.id}`));
    const formattedPosts: FormattedItem[] = await Promise.all(
      rawPosts.map(post => format_tumblr_post(post))
    );

    // Filter for only image and video posts for now, similar to redditpx
    const filteredPosts = formattedPosts.filter(
      (post) => post.is_image || post.is_video
    );

    let after_value;
    if (url.includes('/tagged')) {
      if (rawPosts.length > 0) {
        after_value = rawPosts[rawPosts.length - 1].timestamp;
      } else {
        after_value = null;
      }
    } else {
      after_value = rawPosts.length > 0 ? (parseInt(url.match(/offset=(\d+)/)?.[1] || "0") + rawPosts.length) : null;
    }


    return {
      posts: filteredPosts, // Return all formatted posts
      after: after_value, // Using nextOffset as 'after' for compatibility with existing structure
      res: { ok: true, res },
    };
  } catch (error) {
    console.error("[get_tumblr_posts]: error", error);
    return {
      posts: [],
      after: null,
      res: { ok: false, res: error },
    };
  }
}