

# 🎨 tumblrpx - Beautiful Tumblr Slideshow Viewer

A fast, modern, and beautiful way to browse Tumblr posts as immersive slideshows. Built with Svelte/Sapper for lightning-fast performance. [tumblrpx.netlify.app](https://tumblrpx.netlify.app/)

![TumblrPX Screenshots](https://i.imgur.com/adWxaFB.jpeg)

## ✨ Features

### 🎯 Core Experience
- **Fullscreen Slideshow Mode** - Immersive viewing experience with keyboard navigation
- **Auto-play** - Automatic slideshow progression with customizable intervals
- **Keyboard Shortcuts** - Complete keyboard control for seamless browsing
- **UI Hiding** - Clean, distraction-free viewing with hidden UI
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile

### 🔍 Search & Discovery
- **Tag Search** - Browse posts by tags using `/search/tagname`
- **User Profiles** - View any Tumblr user's posts with `/user/username`
- **Explore Categories** - Discover content in art, photography, design, fashion, and more
- **Quick Navigation** - Direct URL access to any user or tag

### 💾 Content Management
- **Favorites System** - Save and organize your favorite posts
- **Batch Downloads** - Download multiple posts at once
- **Filter Options** - Filter by images, videos, or both
- **Portrait/Landscape Toggle** - Focus on specific content orientations

### 🎮 Advanced Controls
- **Mouse Wheel Navigation** - Scroll to navigate between posts
- **Fullscreen Toggle** - Press `F` for immersive viewing
- **Sound Controls** - Mute/unmute video content
- **Autoplay Controls** - Start/stop automatic progression
- **UI Visibility Toggle** - Show/hide interface elements

<img src="https://i.imgur.com/swpPBfN.png" width="100%" alt="App Screenshot 1">
<img src="https://i.imgur.com/kShAq0M.png" width="100%" alt="App Screenshot 1">

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saihgupr/tumblrpx.git
   cd tumblrpx
   ```

2. **Run the setup script**
   ```bash
   ./setup.sh
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Configure your Tumblr API key**
   - Open http://localhost:3000 in your browser
   - Click the settings gear icon (⚙️)
   - Add your Tumblr API key from [Tumblr OAuth Apps](https://www.tumblr.com/oauth/apps)

### Getting a Tumblr API Key

1. Visit [Tumblr OAuth Apps](https://www.tumblr.com/oauth/apps)
2. Create a new application
3. Copy your "OAuth Consumer Key"
4. Paste it into the settings in TumblrPX

## 🎯 How to Use

### Basic Navigation
- **Home Page** - Start here to explore users, tags, and favorites
- **User Browsing** - Enter a username to view their posts
- **Tag Search** - Use `/search/tagname` to browse posts by tag

### Keyboard Shortcuts

| Action | Key(s) |
|--------|--------|
| **Navigation** | |
| Next Post | `→`, `d`, `j`, `Page Down`, `Mouse Wheel Down` |
| Previous Post | `←`, `a`, `k`, `Page Up`, `Mouse Wheel Up` |
| Next Album | `↑` |
| Previous Album | `↓` |
| **Viewing** | |
| Toggle Fullscreen | `f` |
| Toggle UI Visibility | `h` |
| Toggle Autoplay | `q`, `p` |
| **Content** | |
| Toggle Sound | `s` |
| Toggle Image/Video Filter | `v` |
| Add/Remove Favorite | `x` |
| Copy Media Link | `c` |
| Open Direct Link | `i` |

### URL Structure

- **User Posts**: `/user/username` - Browse any Tumblr user's posts
- **Tag Search**: `/search/tagname` - Browse posts by tag
- **Examples**:
  - `/user/artblog` - View posts from user "artblog"
  - `/search/photography` - Browse posts tagged with "photography"
  - `/search/art+digital` - Browse posts with multiple tags

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run export       # Export static site

# Testing
npm run test         # Run tests
npm run cy:open      # Open Cypress test runner
```

### Project Structure

```
src/
├── components/          # Reusable UI components
├── routes/             # Page routes and layouts
│   ├── search/         # Tag search functionality
│   ├── user/           # User profile browsing
│   └── t/              # Tumblr post viewing
├── _tumblr_utils.ts    # Tumblr API utilities
└── _prefs.js           # User preferences and settings
```

## 🎨 Customization

### Settings Panel
Access the settings gear icon (⚙️) to customize:
- **Autoplay Interval** - Control slideshow speed
- **UI Behavior** - Hide/show interface elements
- **Content Filters** - Image/video preferences
- **Display Options** - High/low resolution, portrait/landscape
- **API Configuration** - Tumblr API key management

### Themes and Styling
The app uses a modern, dark theme optimized for content viewing. All styles are in SASS and can be customized in the component files.

## 🌟 What Makes TumblrPX Special

- **Lightning Fast** - Built with Svelte for optimal performance
- **Keyboard First** - Complete keyboard navigation for power users
- **Mobile Optimized** - Touch-friendly interface on all devices
- **Privacy Focused** - No tracking, no ads, just content
- **Open Source** - Transparent, community-driven development

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues, feature requests, or pull requests.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Svelte](https://svelte.dev/) and [Sapper](https://sapper.svelte.dev/)
- Inspired by [redditpx](https://github.com/jeffjose/redditpx)
- Icons by [Font Awesome](https://fontawesome.com/)

---

**Made with ❤️ for the Tumblr community**