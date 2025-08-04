/* Formatted */

export interface Dims { height: number, width: number }

export type Vid =
  | {
    // imgur.com
    gif: string,
    mp4: string,
    lores: string,
  }
  | {
    // redgifs.com / gfycat.com
    gif: string,
    mp4: string,
    webm: string,
    lores: string,
  }
  | {
    // v.redd.it, reddit.com/r/
    mp4: string,
    lores: string,
  }
  | {
    // i.reddit.com
    gif: string,
    mp4: string,
    lores: string,
  }
  | {
    // default
    mp4: string,
    lores: string,
  }
  | {};

export interface Img { default: string, hires: string, album: Album[] }

export interface Album {
  default: string | undefined,
  hires: string | undefined,
  is_image: boolean,
  is_video: boolean,
  preview: FormattedItemPreview,
}

export interface FormattedItemPreview { vid?: Vid, img?: Img }

export type FormattedItemA =
{
  id: string,
  author: string,
  authorp: string,
  title: string,
  thumbnail?: string,
  subreddit: string,
  subredditp: string,
  permalink: string,
  over18: boolean,
  is_video: boolean,
  is_image: boolean,
  is_album: boolean,
  favorite: boolean,
  url?: string,
  dims: Dims,
  orientation: Orientation,
  preview: FormattedItemPreview,
};

export type FormattedItemB =
{
  url: undefined,
  title: string,
  preview: FormattedItemPreview,
  is_video: boolean,
  is_image: boolean,
};

export type FormattedItem = FormattedItemA | FormattedItemB;

export enum Orientation {
  Normal = "normal",
  Portrait = "portrait",
  Landscape = "landscape",
}

/* Sapper */
import type fetchType from "node-fetch";
export type FetchResponse = Response | ReturnType<typeof fetchType>;

export interface PreloadContext {
  fetch: (url: string, options?: any) => Promise<FetchResponse>,
  error: (statusCode: number, message: Error | string) => void,
  redirect: (statusCode: number, location: string) => void,
}

export type PageParams = Record<string, string>;
export type Query = Record<string, string | string[]>;

export interface PageContext {
  host: string,
  path: string,
  params: PageParams,
  query: Query,
  /** `error` is only set when the error page is being rendered. */
  error?: Error,
}

/**
 * @deprecated PageContext is the preferred name. Page might be removed in the future.
 */
export { PageContext as Page };

export type PreloadResult = object | Promise<object>;
export interface Preload {
  (this: PreloadContext, page: PageContext, session: any): PreloadResult,
}
export interface Redirect { statusCode: number, location: string }

export interface DOMComponentModule {
  default: DOMComponentConstructor,
  preload?: Preload,
}

export interface DOMComponent {
  $set: (data: any) => void,
  $destroy: () => void,
}

export interface DOMComponentConstructor {
  new(options: { target: Element, props: unknown, hydrate: boolean }): DOMComponent,
}

export interface DOMComponentLoader { js: () => Promise<DOMComponentModule> }

export interface Route {
  pattern: RegExp,
  parts: Array<{ i: number, params?: (match: RegExpExecArray) => PageParams }>,
}

export interface HydratedTarget {
  redirect?: Redirect,
  preload_error?: any,
  props: any,
  branch: Branch,
}

export type Branch = Array<
  {
    segment: string,
    match?: RegExpExecArray,
    component?: DOMComponentConstructor,
    part?: number,
  }
>;

export type InitialData = {
  session: any,
  preloaded?: object[],
  status: number,
  error: Error,
  baseUrl: string,
};

export interface ScrollPosition { x: number, y: number }

export interface Target {
  href: string,
  route: Route,
  match: RegExpExecArray,
  page: PageContext,
}

export interface Redirect { statusCode: number, location: string }

// Tumblr API types
export interface TumblrPost {
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
}