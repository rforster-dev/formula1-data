<template>
  <nav
    class="
      text-sm
      font-medium
      md:ml-auto
      flex flex-wrap
      items-center
      text-base
      justify-center
    "
  >
    <ul>
      <li
        v-for="navigationLink in navigationLinks"
        :key="navigationLink.id"
        class="inline-block xs-small-text"
      >
        <a
          class="mr-5 hover:text-gray-900"
          v-bind:href="navigationLink.linkURL"
          >{{ navigationLink.linkTitle }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  name: "NavigationBar",
  setup() {
    // make users variable reactive with the ref() function
    const navigationLinks = ref([
      { linkTitle: "Home", linkURL: "/" },
      { linkTitle: "Drivers", linkURL: "/all-drivers.html" },
      { linkTitle: "Final standings", linkURL: "/championship-standings.html" },
      { linkTitle: "Race results", linkURL: "/season-list.html" },
    ]);

    return {
      navigationLinks,
    };
  },
};
</script>

<style scoped>
@media (max-width: 500px) {
  .xs-small-text a {
    font-size: 0.5rem;
  }
}
</style>