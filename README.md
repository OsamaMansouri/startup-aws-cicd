# Startup - Free Next.js Startup Website Template

Startup is a free, open-source, and premium-quality [**Next.js startup website template**](https://nextjstemplates.com/templates/startup) that comes with everything you need to launch a startup, business, or SaaS website, including all essential sections, components, and pages.

If you're looking for a high-quality and visually appealing, feature-rich Next.js Template for your next startup, SaaS, or business website, this is the perfect choice and starting point for you!

### ✨ Key Features
- Crafted for Startup and SaaS Business
- Next.js 15 and Tailwind CSS 4
- All Essential Business Sections and Pages
- High-quality and Clean Design
- Dark and Light Version (Light mode by default)
- TypeScript Support
- Fully responsive design
- SEO optimized
and Much More ...

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NextJSTemplates/startup-nextjs.git
   cd startup-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server (run `npm run build` first)
- `npm run lint` - Run ESLint

## 🛠️ Configuration

### Theme Settings

The default theme is set to **light mode**. To change the default theme, edit `src/app/providers.tsx`:

```tsx
<ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
```

Change `defaultTheme="light"` to `defaultTheme="dark"` if you prefer dark mode by default.

## 🐛 Troubleshooting

### Windows EPERM Permission Errors

If you encounter `EPERM: operation not permitted` errors on Windows:

1. **Stop all Node.js processes**
   ```powershell
   Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
   ```

2. **Delete the `.next` folder**
   ```powershell
   Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
   ```

3. **Run with telemetry disabled**
   ```powershell
   $env:NEXT_TELEMETRY_DISABLED=1
   npm run dev
   ```

   Or use the provided script:
   ```powershell
   .\fix-permissions.ps1
   ```

### Hydration Errors

If you see React hydration warnings, they should be resolved in the current version. The app includes:
- `suppressHydrationWarning` on HTML and body tags
- Proper window checks in client components
- Fixed event listeners with cleanup functions

### Port Already in Use

If port 3000 is already in use, Next.js will automatically use the next available port (3001, 3002, etc.). Check the terminal output for the actual port number.

### 🙌 Detailed comparison between the Free and Pro versions of Startup

| Feature             | Free | Pro |
|---------------------|------------|----------|
| Next.js Landing Page             | ✅ Yes      | ✅ Yes      |
| All The Integrations - Auth, DB, Payments, Blog and many more ...             | ❌ No      | ✅ Yes |
| Homepage Variations             | 1      | 2 |
| Additional SaaS Pages and Components             | ❌ No      | ✅ Yes |
| Functional Blog with Sanity       | ❌ No      | ✅ Yes |
| Use with Commercial Projects            | ✅ Yes      | ✅ Yes      |
| Lifetime Free Updates             | ✅ Yes      | ✅ Yes |
| Email Support       | ❌ No         | ✅ Yes       |
| Community Support         | ✅ Yes         | ✅ Yes       |


### [🔥 Get Startup Pro](https://nextjstemplates.com/templates/saas-starter-startup)

[![Startup Pro](https://raw.githubusercontent.com/NextJSTemplates/startup-nextjs/main/startup-pro.webp)](https://nextjstemplates.com/templates/saas-starter-startup)

Startup Pro - Expertly crafted for fully-functional, high-performing SaaS startup websites. Comes with with Authentication, Database, Blog, and all the essential integrations necessary for SaaS business sites.


- [🚀 View Free Demo](https://startup.nextjstemplates.com/)

- [🚀 View Pro Demo](https://startup-pro.nextjstemplates.com/)

- [📦 Download](https://nextjstemplates.com/templates/startup)

- [🔥 Get Pro](https://nextjstemplates.com/templates/saas-starter-startup)

- [🔌 Documentation](https://nextjstemplates.com/docs)

### ⚡ Deploy Now

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNextJSTemplates%2Fstartup-nextjs)

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/NextJSTemplates/startup-nextjs)


## 📁 Project Structure

```
startup/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   ├── styles/           # Global styles
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies
```

## 🎨 Customization

### Changing Colors

Edit the color variables in `src/styles/index.css`:

```css
--color-primary: #4a6cf7;
--color-black: #121723;
--color-dark: #1d2430;
```

### Adding New Pages

1. Create a new folder in `src/app/` with your page name
2. Add a `page.tsx` file inside the folder
3. The route will be automatically available at `/your-page-name`

### Modifying Components

All components are located in `src/components/`. Each component is self-contained and can be easily customized.

## 📝 Update Log

**Latest Updates**
- Set light mode as default theme
- Fixed React hydration errors
- Improved Windows compatibility (EPERM error fixes)
- Enhanced event listener cleanup in components
- Added proper window checks for SSR compatibility

**10 April 2025**
- Fix peer deps issue with Next.js 15
- Upgrade to tailwind v4
- Refactored blog cards for handling edge cases(text ellipsis on bio, keeping author details at the bottom etc.)
- Re-wrote blog details page with icons separation, fallback author image and better markup.
- Fixed duplicate key errors on homepage.
- Separated icons on theme-switcher button, and refactored scroll-to-top button.

**29 Jan 2025**
- Upgraded to Next.js 15

## 📄 License

Startup is 100% free and open-source, feel free to use with your personal and commercial projects.

## 💜 Support

If you like the template, please star this repository to inspire the team to create more stuff like this and reach more users like you!

### ✨ Explore and Download - Free [Next.js Templates](https://nextjstemplates.com)
