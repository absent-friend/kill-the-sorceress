import vikeSolid from "vike-solid/vite";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => ({
  base: isPreview ? '/' : '/kill-the-sorceress/',
  plugins: [vike({ prerender: true }), vikeSolid()],
}));
