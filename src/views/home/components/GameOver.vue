<script setup lang="ts">
import banner from "~/assets/Jackpot_EUH_11.png";

const router = useRouter();
</script>

<template>
  <div class="relative  flex  max-h-screen flex-col items-center gap-20  bg-[#E4E4E4] " @click="router.push('/')">
    <img :src="banner" alt="" class="h-screen">
    <div class=" text absolute top-[40%]  z-10  m-auto flex w-2/3 flex-col gap-3 p-5 text-7xl text-black  lg:w-1/3">
      <p class="font-bold">
        ¡UPSI, PARA LA PROXIMA
      </p>
      <p class="text-3xl font-light text-red-600">
        ESPEREMOS QUE DISFRUTES DE UNIVERSAL
      </p>
    </div>
  </div>
</template>
