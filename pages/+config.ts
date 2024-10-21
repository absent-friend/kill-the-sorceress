import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";

export default {
  Layout,

  bodyAttributes: { class: "bg-slate-100 dark:bg-slate-950 dark:text-violet-200" },

  title: "Kill the Sorceress!",
  description: "A comprehensive guide to advanced speedrun strategies for the first Sorceress fight in Spyro: Year of the Dragon.",

  extends: vikeSolid,
} satisfies Config;
