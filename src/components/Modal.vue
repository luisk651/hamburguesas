<script setup lang="ts">
interface Emit {
  (e: "onClose"): void;
}
const emit = defineEmits<Emit>();
</script>

<template>
  <div class="fixed z-30 flex h-screen w-full items-center justify-center bg-[#00000086]">
    <div class="absolute z-0 h-full w-full" @click="emit('onClose')" />
    <div class="z-10 flex justify-center lg:w-1/2">
      <slot />
    </div>
  </div>
</template>

   <style>

   </style>
