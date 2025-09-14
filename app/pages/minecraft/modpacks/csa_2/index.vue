<script setup lang="ts">
const title: string = "CSA 2!";
const description: string = "The amazing sequel to Create Space Adventure!";
</script>

<template>
  <UBanner title="Now in Alpha!" icon="lucide:rocket" />
  <UPageHero :title="title" :description="description" />
</template>
