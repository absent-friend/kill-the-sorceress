import vikeSolid from "vike-solid/vite";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  base: '/kill-the-sorceress/',
  plugins: [vike({ prerender: true }), vikeSolid()],
});
