import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://pioneer-cos.com",
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: {
        solar: [
          "letter-bold",
          "phone-calling-bold"
        ],
        ic: ["*"],
        bxl: ["facebook", "youtube", "yelp"]
      }
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    tailwind(),
    robotsTxt()],
  output: "static",
  adapter: netlify(),
});
