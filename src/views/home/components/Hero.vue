<script setup lang="ts">
const router = useRouter();

const testStore = () => {
  router.push("/game");
};
</script>

<template>
  <div class="hero  min-h-screen text-primary-content">
    <!--  <div class="hero min-h-screen from-primary to-secondary" style="background-image: url(https://img.js.design/assets/Resources/background/home-bg-2.png);"> -->
    <div
      class="hero-overlay place-items-center bg-gradient-to-bl from-primary to-base-100"
    />
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          Jackpot
        </h1>
        <p class="mb-5" />
        <button class="btn-primary btn" @click="testStore">
          Start Now
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
