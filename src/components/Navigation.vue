<template>
   <nav id="primary-nav" class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <ul class="grid grid-cols-4 gap-y-4 gap-x-8">
         <li v-for="navigationLink in navigationLinks" :key="navigationLink.id">
            <a class="mr-5 hover:text-gray-900" v-bind:href="navigationLink.linkURL">{{navigationLink.linkTitle}}</a>
         </li>
      </ul>
   </nav>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'NavigationBar',
    setup() {
        // make users variable reactive with the ref() function
        const navigationLinks = ref([
            { linkTitle: 'Home', linkURL: '/'},
            { linkTitle: 'Drivers', linkURL: '/all-drivers.html'},
            { linkTitle: 'Final standings', linkURL: '/championship-standings.html'},
            { linkTitle: 'Race results', linkURL: '/season-list.html'},
            
    ]);

        return {
            navigationLinks
        };
    }
}
</script>