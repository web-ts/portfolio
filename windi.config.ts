import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}", "index.html"],
    exclude: ["node_modules", ".git"]
  },
  theme: {
    extend: {
      colors: {
        "kinda-white": "#e0e0e0"
      }
    }
  }
});
