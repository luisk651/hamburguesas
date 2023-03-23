<script setup lang="ts">
import appStore from "~/store";
const routes = useRoute();
const router = useRouter();
const { form, save } = appStore.game;
const onSubmit = async () => {
  form.type = routes.query.type;
  await save();
  alert("datos guardados");
  router.push("/");
};
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center">
    <form class="w-full bg-white p-5  " @submit.prevent="onSubmit">
      <h1 class="mb-5 text-center text-3xl font-bold text-gray-800">
        Completa el formulario
      </h1>
      <div class="mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-gray-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>

        <input v-model="form.name" class="w-full border-none pl-2 text-xl outline-none" type="text" name="" placeholder="Nombre completo">
      </div>
      <div class="mb-4 flex items-center rounded-2xl border-2 py-2 px-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input v-model="form.email" class="w-full border-none pl-2 text-xl outline-none  " type="text" name="" placeholder="Email ">
      </div>
      <div class="flex items-center rounded-2xl border-2 py-2 px-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-gray-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>

        <input v-model="form.cell" class="w-full border-none pl-2 text-xl outline-none" type="text" name="" placeholder="Numero de celular">
      </div>
      <button type="submit" class="mt-4 mb-2 block w-full rounded-2xl bg-indigo-600 py-5 font-semibold text-white">
        Enviar
      </button>
    </form>
  </div>
</template>
