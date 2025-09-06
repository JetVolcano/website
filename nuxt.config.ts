// https://nuxt.com/docs/api/configuration/nuxt-config

import spotlight from "@spotlightjs/spotlight/vite-plugin";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxt/ui", "@nuxtjs/color-mode", "@nuxt/icon", "@compodium/nuxt"],
  icon: {
    collections: ["lucide"],
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [spotlight()],
  },
});
