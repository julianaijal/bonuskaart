# 💳 Bonuskaart

This is a digital representation of a bonus card, built with Next.js, TypeScript, and SCSS. It's designed to be mobile-friendly and displays a barcode for in-store use.

## ✨ Features

*   Displays a digital bonus card.
*   Shows a scannable barcode image (`/public/img/barcode.svg`).
*   Mobile-first design.
*   Includes bundle analysis setup with `@next/bundle-analyzer`.

## ⚙️ Technology Stack

*   [Next.js](https://nextjs.org/) (v14+)
*   [React](https://reactjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [SCSS Modules](https://sass-lang.com/)
*   [ESLint](https://eslint.org/)

## 📁 Project Structure

*   `app/page.tsx`: Main page component displaying the card.
*   `app/layout.tsx`: Main layout component.
*   `app/styles/card.module.scss`: Styles for the card component.
*   `app/globals.scss`: Global styles.
*   `public/img/barcode.svg`: The barcode image.
*   `next.config.mjs`: Next.js configuration, including image domains and bundle analyzer setup.
*   `package.json`: Project dependencies and scripts.
*   `wrangler.jsonc`: Configuration for Cloudflare Worker (serves static assets from `./public`).

## 🛠️ Prerequisites
*   npm or yarn.

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd bonuskaart
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts a Next.js production server.
*   `npm run lint`: Lints the codebase using ESLint.
*   `npm run analyze`: Builds the application and opens the bundle analyzer report (`.next/analyze/client.html`).

## 🖼️ Barcode

The barcode image is `barcode.svg` and is located in the `/public/img/` directory. It is displayed using the `next/image` component.


## ☁️ Deployment

### Cloudflare Pages

*   The project is configured for deployment on Cloudflare Pages.
*   Ensure the `NODE_VERSION` environment variable in the Cloudflare Pages build settings is set to `20.9.0` or a compatible newer version (e.g., `20.11.0`) to match the `engines` field in `package.json`.

### Cloudflare Worker (Static Assets)

*   A Cloudflare Worker named `bonuskaart` is configured via `wrangler.jsonc` to serve static assets from the `./public` directory.
*   Deployed URL for static assets (if configured separately): `https://bonuskaart.julian-aijal.workers.dev`