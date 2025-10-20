# Onelasttime
website

## Tech Stack

This is a modern web application built with:

- **Astro** - Modern web framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **React** - UI component library (for .tsx components)
- **ESLint** - Code quality and linting
- **Vite** - Build tool (bundled with Astro)
- **esbuild** - JavaScript bundler (used by Vite)

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Linting

Run ESLint:

```bash
npm run lint
```

Auto-fix linting issues:

```bash
npm run lint:fix
```

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # React/Astro components
│   ├── layouts/     # Page layouts
│   └── pages/       # Page routes
├── astro.config.mjs # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
├── tsconfig.json    # TypeScript configuration
└── eslint.config.mjs # ESLint configuration
```

