import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import spotlight from "@spotlightjs/spotlight/vite-plugin";

export default defineConfig({
  plugins: [
    solidPlugin(),
    spotlight({
      buttonPosition: "bottom-left",
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
