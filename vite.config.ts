import vikeSolid from "vike-solid/vite";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [vike({}), vikeSolid()],
});
