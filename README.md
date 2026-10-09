# Refokus Clone

A front-end recreation of the Refokus website, built to practice modern UI development: pixel-focused layouts, smooth scrolling and scroll-driven animations.


> This is an educational project and is not affiliated with or endorsed by Refokus. All original design, brand names and content belong to their respective owners.

## Features

- Faithful recreation of the Refokus landing page layout and visual style
- Smooth scrolling across the page
- Scroll-based and interaction-based animations
- Custom typography using the Satoshi variable font
- Responsive layout built with Tailwind CSS utility classes
- Fast development and optimized production builds powered by Vite

## Tech Stack

| Area            | Technology                  |
|-----------------|-----------------------------|
| Build tool      | Vite                        |
| Styling         | Tailwind CSS, PostCSS       |
| Language        | JavaScript (ES6+)           |
| Code quality    | ESLint                      |
| Typography      | Satoshi Variable font       |

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) 18 or later
- npm (included with Node.js)

### Installation
```bash
git clone https://github.com/MahiSharma29/Refokus.git
cd Refokus
npm install
```

### Run in development
```bash
npm run dev
```
Then open the local URL shown in the terminal (usually http://localhost:5173).

### Available scripts

| Command           | Description                                   |
|-------------------|-----------------------------------------------|
| `npm run dev`     | Start the development server with hot reload  |
| `npm run build`   | Create an optimized production build in `dist`|
| `npm run preview` | Preview the production build locally          |
| `npm run lint`    | Check the code with ESLint                    |

## Project Structure

```
Refokus/
├── public/                 # Static assets served as-is
├── src/                    # Application source code
├── index.html              # HTML entry point
├── Satoshi-Variable.ttf    # Satoshi variable font
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## Deployment

The project builds to static files, so it can be hosted on any static hosting service.

**Vercel or Netlify**
1. Push the repository to GitHub.
2. Import the repository on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Use these settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Every push to the main branch redeploys the site automatically.

## What I Learned

- Breaking a complex design into reusable, well-structured sections
- Building responsive layouts with Tailwind CSS
- Implementing smooth scrolling and scroll-driven animations
- Setting up a modern front-end toolchain with Vite, PostCSS and ESLint

## Credits

- Original design and concept: [Refokus](https://www.refokus.com)
- Typeface: Satoshi by Indian Type Foundry. Please review its license terms on [Fontshare](https://www.fontshare.com) before commercial use.

## Author

**Mahi Sharma**
GitHub: [@MahiSharma29](https://github.com/MahiSharma29)
