<script setup lang="ts">
import appStore from "~/store";
import Modal from "~/components/Modal.vue";
import logo from "~/assets/Jackpot_EUH_4.png";
import lineas from "~/assets/Jackpot_EUH_9.png";
import banner1 from "~/assets/Pantalla_Juego_EUH_4.png";
import banner2 from "~/assets/Pantalla_Juego_EUH_3.png";

const router = useRouter();
const { start } = appStore.game;
const showModal = ref<boolean>(false);
const response = ref<any >(null);

const newGame = async () => {
  response.value = await start();
  if (response.value.status === 0 || response.value.status === 2) {
    router.push("/gameover");
    return;
  }
  showModal.value = true;
};
</script>

<template>
  <Modal v-if="showModal" @on-close="showModal = false">
    <div>
      <img v-if="response.status === 4" :src="banner1" alt="" class="md:h-[60rem]">
      <img v-if="response.status === 3" :src="banner2" alt="" class="md:h-[31rem]">
      <button
        v-if="response.status === 3 || response.status === 4 "
        :class="{ 'border-red-600': (response.status === 3), 'border-[#3300FF]': (response.status === 4) }"
        class="mt-4 w-full rounded-full border-4 bg-transparent  p-5 text-2xl text-white "
        @click="router.push(`/form?type=${response.status}`)"
      >
        RECLAMAR PREMIO
      </button>
    </div>
  </Modal>
  <div class="relative flex h-screen flex-col items-center gap-20  bg-[#3300FF] pt-5 pb-10 ">
    <img :src="lineas" alt="" class="opac absolute z-0 mt-32  max-h-full -rotate-6 opacity-50">
    <div class="z-10 flex h-screen w-full flex-col justify-around gap-3 p-5  text-6xl text-white">
      <img :src="logo" alt="" class="h-48 w-48">
      <p class="font-bold">
        EL PARCHESITO UNIVERSAL SIEMPRE ESTA EN LOS CONCIERTOS DE PÁRAMO
      </p>
      <p class="font-light">
        HAZ CLICK Y PARTICIPA PARA IR A
      </p>
      <p class="font-bold">
        CONCIERTOS, OIR POR 5 AÑOS VIP A UN MUNDO DISTINTO
      </p>
      <button class="mt-4 rounded-full  border-4 border-red-600 bg-transparent p-2 " @click="newGame">
        COMENZAR
      </button>
    </div>
  </div>
</template>
