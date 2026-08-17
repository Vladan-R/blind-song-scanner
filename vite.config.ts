import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/blind-song-scanner/',
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  publicDir: "./public",
});
