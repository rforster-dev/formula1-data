<template>
 <main class="herobanner mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"> 
       

         <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div class="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
                <button class="w-3 h-3 mx-2 bg-blue-500 rounded-full md:mx-0 focus:outline-none"></button>
                <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
            </div>

            <div class="max-w-lg md:mx-12 md:order-2">
                 <h1  class="text-5xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-l from-red-900  to-blue-500">
            <span class="block xl:inline">{{winningDriverData.givenName}} {{winningDriverData.familyName}} wins the {{seasonYear}} Formula 1 championship! <span class="trophy-icon">🏆</span></span>
          </h1>
                <p class="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                <div class="mt-6">
                    <a v-bind:href="'./driver-results.html?driver='+winningDriverCode" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    How he achieved it
                </a>
                
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 md:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src="../../../assets/max-wins.jpg" alt="Max Verstappen celebrating">
        </div>
    </div>
      </main>

      
</template>

<script>
import axios from 'axios';

export default {
  name: 'HeroBanner',
  data () {
    return {
        winningDriverData: [],
        seasonYear: [],
        errors: [],
        winningDriverCode: []
    }
  },
  created() {
    axios.get(`https://ergast.com/api/f1/current/driverStandings.json`)
    .then(response => { 
        this.winnerData         = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
        this.seasonYear         = response.data.MRData.StandingsTable.StandingsLists[0].season
        this.winningDriverData  = this.winnerData.Driver
        this.winningDriverCode  =   this.winnerData.Driver.driverId
        console.log(this.winnerData);
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>
.trophy-icon {
    color:goldenrod;
}




</style>