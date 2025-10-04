<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    icon: "lucide:house",
    to: "/",
  },
  {
    label: "Python",
    icon: "material-icon-theme:python",
    children: [
      {
        label: "Easier Data",
        description: "A Python package that makes managing data easier",
        icon: "lucide:chart-area",
        to: "/python/easier-data",
      },
      {
        label: "Accurate Benchmark",
        description:
          "A Python package for accurate benchmarks and speed comparisons",
        icon: "lucide:clock",
        to: "/python/accurate-benchmark",
      },
    ],
  },
  {
    label: "Minecraft",
    icon: "vscode-icons:file-type-minecraft",
    children: [
      {
        label: "Create Space Adventure",
        description: "The amazing sequel to Create Space Adventure!",
        icon: "lucide:rocket",
        to: "/minecraft/modpacks/csa_2",
      },
    ],
  },
]);
</script>

<template>
  <UHeader>
    <template #title>
      <UAvatar src="/favicon.ico" />
      JetVolcano's Website
    </template>

    <UNavigationMenu :items="items" class="w-full justify-center" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on Github">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/JetVolcano/website"
          target="_blank"
          icon="simple-icons:github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
  </UHeader>
</template>
