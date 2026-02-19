import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "./",

  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        recieved: resolve(__dirname, "src/recieved.html"),
        dashboard: resolve(__dirname, "src/main.html"),
      },
    },
  },
});
