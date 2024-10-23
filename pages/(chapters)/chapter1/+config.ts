import { Config } from "vike/types";
import defaultConfig from "../../+config";

export default {
  title: 'Chapter 1 - ' + defaultConfig.title,
  description: "Chapter 1 covers the time from loading into the level to the beginning of the first phase. Rules are laid out for predicting Agent 9's movements and the location of the first cannon drop.",
} satisfies Config;