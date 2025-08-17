# Portfolio

A modern, responsive portfolio website built with Astro, Tailwind CSS, and TypeScript. 


## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern Tech Stack**: Built with Astro, Tailwind CSS, and TypeScript
- **GitHub Pages Integration**: Automated deployment with GitHub Actions
- **Dark/Light Mode Support**: Dynamic theme switching
- **Performance Optimized**: Fast loading times and SEO-friendly
- **Accessible**: Following web accessibility best practices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/sebastianzsu/sebastiansu-portfolio.git
cd sebastiansu-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📁 Project Structure

```
/
├── public/
│   ├── assets/
│   │   ├── fonts/          # Custom fonts
│   │   └── images/         # Images and icons
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── home/           # Homepage components
│   │   └── general/        # Shared components
│   ├── data/
│   │   └── info.ts         # Personal data and content
│   ├── layouts/
│   │   └── Layout.astro    # Main layout component
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   └── projects.astro  # Projects page
│   ├── styles/             # CSS and styling files
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── .github/workflows/      # GitHub Actions deployment
├── package.json
└── astro.config.mjs        # Astro configuration
```

## 🎯 Customization

### Personal Information

Update your personal information in `src/data/info.ts`:

- **Basic Info**: Name, job title, bio
- **Experience**: Work history and achievements
- **Education**: Academic background
- **Skills**: Technical skills organized by category
- **Projects**: Featured projects with descriptions
- **Social Media**: Links to your profiles

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.cjs`
- **Fonts**: Add custom fonts in `src/styles/fonts.css`
- **Components**: Customize individual components in `src/components/`

## 🛠️ Available Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`     |
| `npm run build`        | Build your production site to `./dist/`         |
| `npm run preview`      | Preview your build locally, before deploying    |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check`|
| `npm run astro --help` | Get help using the Astro CLI                    |

## 🚀 Deployment

This portfolio is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Automatic Deployment**:
   - Every push to the `main` branch triggers a deployment
   - Build process runs automatically via GitHub Actions
   - Site updates within 2-3 minutes

3. **Custom Domain** (Optional):
   - Add your custom domain in repository settings
   - Update the `site` field in `astro.config.mjs`

## 🔧 Configuration

### GitHub Pages Setup

The `astro.config.mjs` is pre-configured for GitHub Pages:

```javascript
export default defineConfig({
  site: "https://sebastiansu.github.io",
  base: "/sebastiansu-portfolio",
  // ... other configurations
});
```

### Environment Variables

For local development, you can create a `.env` file:

```env
# Add any environment variables here
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


---

Built with ❤️ using [Astro](https://astro.build/)