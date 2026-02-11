import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/retro-computer-website/" : "/",
  plugins: [checker({ typescript: true })],
  worker: {},
  build: {
    sourcemap: false,
  },
  server: {
    open: true,
    port: 1234,
    host: "localhost",
  },
}));
