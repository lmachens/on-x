import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: "./",
  build: {
    polyfillDynamicImport: false,
    outDir: "overwolf/dist",
    rollupOptions: {
      input: {
        background: resolve(__dirname, "background.html"),
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
