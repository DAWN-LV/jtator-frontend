<template>
  <div class="relative">
    <h2 class="text-4xl font-extrabold dark:text-white">{{ title }}</h2>
    <section v-bind="$attrs" class="relative w-full p-5 mt-4 border-2 border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600" :class="[solid ? 'border-solid' : 'border-dashed']">
      <slot/>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string, solid?: boolean }>()
defineOptions({ inheritAttrs: false })
</script>