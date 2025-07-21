import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import vue from "@astrojs/vue";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://three.snkw.dev",
  integrations: [
    react({
        include: ["components/react/**"]
    }), 
    vue({
        include: ["components/vue/**"]
    })
    ],

  vite: {
    plugins: [tailwindcss()]
  }
});