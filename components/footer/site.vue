<script setup lang="ts">
import { footerData } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300   text-base py-1 font-semibold">
      About This Site
    </p>
    <p class="py-2 dark:text-zinc-300 ">
      {{ footerData.aboutTheSite }}
      this website template can be found in <a href="https://github.com/nurriyad/blog" target="_blank" rel="nofollow" class="underline">Here</a>
    </p>
  </div>
</template>
