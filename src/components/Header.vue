<template>
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     🏁
      <span class="ml-3 text-xl">F1 2021 Season data</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Navigation/>
    </nav>
  </div>
  <NextRace />
</header>
</template>

<script>
import Navigation from './Navigation.vue'
import NextRace from './blocks/next-race/NextRace.vue'
export default {
    name: 'Header',
    components: {
        Navigation,
        NextRace
  }
}
</script>