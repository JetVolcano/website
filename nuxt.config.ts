// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxt/ui", "@nuxt/icon", "@compodium/nuxt", "@nuxt/fonts"],
  icon: {
    collections: ["lucide"],
  },
  css: ["~/assets/css/main.css"],
  fonts: {
    provider: "google",
    families: [{ name: "JetBrains Mono", provider: "google", global: true }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "JetVolcano's Website",
    },
  },
});
