import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * GitHub Pages / custom domain friendly base.
 * `./` makes asset URLs relative, so the site works both on:
 * - https://<user>.github.io/<repo>/
 * - https://your-custom-domain/
 */
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
