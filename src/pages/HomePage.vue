<template>
  <main class="home">
    <h1>koharu.dev</h1>
    <h4>Site is under construction! 🐌</h4>

    <div style="margin: 0.5em;">
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
    </div>

    <div style="margin: 2em 0.5em;">
      <h5>Web services list</h5>

      <div v-for="website in WEBSITES_LIST" :key="website.name" style="margin: 0.25em 0;">
        <span>〉</span>
        <a :href="website.url" style="margin: 0 0.25em;">{{ website.name }}</a>
        <small style="font-size: smaller; font-weight: lighter; margin-left: 0.25em;"> — {{ website.description }}</small>
      </div>
    </div>
  </main>

  <img class="koharu-image" src="@/assets/koharu.png" alt="Shimoe Koharu official illustration" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component({})
export default class HomePage extends Vue {
  readonly WEBSITES_LIST = [
    {
      name: "Mollufier",
      description: "Turn sentences into 'Mollu'",
      url: "https://mollufier.koharu.dev",
    },
    {
      name: "MyBoothManager",
      description: "Web-based booth publishment/management service for creators",
      url: "https://booth.koharu.dev",
    },

    {
      name: "Changelogs",
      description: "Changelogs of koharu.dev web services",
      url: "https://changelogs.koharu.dev",
    },
  ];
}
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
  opacity: 0.75;

  animation: koharu 7.5s infinite ease-in-out;
}

@keyframes koharu {
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -0.5vh, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
</style>
