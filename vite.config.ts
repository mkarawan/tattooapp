import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        background_color: "#0c0a10",
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "TattooStudio",
        name: "Tattoo Studio",
        lang: "pl",
        icons: [
          {
            src: "/logo1.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 5174,
    host: true,
  },
});
