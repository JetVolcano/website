// https://nuxt.com/docs/api/configuration/nuxt-config

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
    plugins: [],
  },
  app: {
    head: {
      title: "JetVolcano's Website",
    },
  },
});
