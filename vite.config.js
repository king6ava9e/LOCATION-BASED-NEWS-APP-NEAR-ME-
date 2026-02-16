import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "./",
  base: "/LOCATION-BASED-NEWS-APP-NEAR-ME",
  build: {
    outDir: 'dist', 
  }
});
