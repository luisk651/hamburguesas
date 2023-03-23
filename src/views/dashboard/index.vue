<script setup lang="ts">
import appStore from "~/store";
const { basicData } = appStore.game;
const onSubmit = async () => {
  alert("datos guardados");
};
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center">
    <article>
      <h2 class="text-white-800 mb-5 text-center text-3xl font-bold">
        Comfiguracion
      </h2>
      <section>
        <form @submit.prevent="onSubmit">
          <article>
            <div>
              <label>Cantidad de boletas máximas normales: </label>
              <input v-model="basicData.normalMaxTickets" class="w-full border-none pl-2 outline-none" type="text" name="" placeholder="Nombre completo">
            </div>
            <div>
              <label>Cantidad de boletas máximas oro: </label>
              <input v-model="basicData.goldMaximumTickets" class="w-full border-none pl-2 outline-none" name="" type="number">
            </div>
          </article>
          <article>
            <div>
              <label>Cantidad mínima para dar premios boletas normales: </label>
              <input v-model="basicData.minimumAmountToGiveNormalPrize" class="w-full border-none pl-2 outline-none" name="" type="number">
            </div>
            <div>
              <label>Cantidad mínima para dar premios boletas oro: </label>
              <input v-model="basicData.minimumAmountToGiveGoldPrize" class="w-full border-none pl-2 outline-none" name="" type="number">
            </div>
          </article>
          <button type="submit" class="mt-4 mb-2 block w-full rounded-2xl bg-indigo-600 py-2 font-semibold text-white">
            Enviar
          </button>
        </form>
      </section>
    </article>
  </div>
</template>
