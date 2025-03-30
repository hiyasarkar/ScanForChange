import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://buzzard-popular-obviously.ngrok-free.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
