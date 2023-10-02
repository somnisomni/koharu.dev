<template>
  <main class="home">
    <h1>koharu.dev</h1>
    <h4>Site is under construction! 🐌</h4>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
  </main>

  <img class="koharu-image" src="@/assets/koharu.png" alt="Shimoe Koharu official illustration" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component({})
export default class HomePage extends Vue { }
</script>

<style lang="scss">
main.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.koharu-image {
  position: fixed;
  z-index: -1;
  height: 90vh;
  bottom: -5vh;
  right: -10vh;
  object-fit: contain;
  object-position: bottom right;

  animation: koharu 7.5s infinite ease-in-out;
}

@keyframes koharu {
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -0.5vh, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
</style>
