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
    families: [
      {
        name: "Maple Mono",
        src: "/fonts/MapleMonoNL-Regular.woff2",
        weight: "400",
        style: "normal",
        global: true,
      },
    ],
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
