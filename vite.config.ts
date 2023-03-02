import autoImport from 'unplugin-auto-import/vite';
import devtools from 'solid-devtools/vite';
import solidPlugin from 'vite-plugin-solid';
import windiCSS from 'vite-plugin-windicss';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from "node:url";
export default defineConfig({
  plugins: [
    windiCSS(),
    autoImport({
      imports: ["solid-js", "@solidjs/router"]
    }),
    devtools({
      autoname: true
    }),
    solidPlugin()
  ],
  server: {
    port: 3000
  },
  build: {
    target: "esnext"
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
