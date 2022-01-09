<template>
<div class="container mx-auto">
<h1 class="mt-20 font-medium text-center text-3xl font-bold pb-10" data-v-39231d34="">Race results</h1>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div v-for="race in allRaces2021" :key="race.key" class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Round {{race.round}}</span>
          <span class="mt-1 text-gray-500 text-sm">{{race.date}} - {{race.time}}</span>
          <p class="mt-1 text-gray-500 text-sm">{{race.Circuit.Location.locality}}, {{race.Circuit.Location.country}}</p>
          <a :href="`https://www.google.com/maps/place/${race.Circuit.Location.lat},${race.Circuit.Location.long}`" target="_blank" class="text-indigo-500 inline-flex items-center mt-4">Google maps
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <a :href="`${race.Circuit.url}`" target="_blank" class="text-indigo-500 inline-flex items-center mt-4">Wikipedia entry
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="md:flex-grow">

          

<h2 class="text-2xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-tr from-red-400  to-red-800">  {{race.raceName}}</h2>
<div class="h-1 w-20 bg-indigo-500 rounded"></div>
  <section class="text-gray-600 body-font">
  <div class="container px-4 py-10 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="pt-4 pb-4 text-left sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-2xl text-1xl text-gray-900">{{race.Results[0].Driver.givenName}} {{race.Results[0].Driver.familyName}}</h2>
        <p class="leading-relaxed">Winner</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-2xl text-1xl text-gray-900">{{race.Results[0].Constructor.name}} </h2>
        <p class="leading-relaxed">Constructor</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-2xl text-1xl text-gray-900">{{race.Results[0].laps}}</h2>
        <p class="leading-relaxed">Laps</p>
      </div>
      <div class="pt-4 pb-4 text-right sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-2xl text-1xl text-gray-900">{{race.Results[0].Time.time}}</h2>
        <p class="leading-relaxed">Finishing time</p>
      </div>
    </div>
  </div>
</section>
          
         
        </div>
      </div>

    </div>
  </div>
</section>
</div> 
</template>

<script>

import axios from 'axios';


export default {
  name: 'DriverList',
  
  data () {
    return {
        allRaces2021       : [],
        previousYear       : []
    }
  },
  created() {

  axios.get(`https://ergast.com/api/f1/current/results/1.json`)
  .then(response => {
    this.allRaces2021 = response.data.MRData.RaceTable.Races;
  })

  axios.get(`http://ergast.com/api/f1/current/results/1.json`)
  .then(response =>{
    this.previousYear = response.data.MRData.RaceTable.Races;
  })



//co ordinates tak you to googlemap/yell maps?

  },

 
}
//@TODO
/**
 * - Implement all nationalities as filter
 * - Style
 * - Update "21 drivers" to how many found
 * - add loading graphic for drivers
 */
</script>

<style scoped>

.page-title {
  margin: 0 0 1rem;
}
.page-subheading {
  margin:0;
  font-size:0.9rem;
  color:grey;
}
.driver-card {
  border-bottom:1px solid silver;
  padding:1rem 0.5rem;
}

.driver-img {
  width:100px;
  height:100px;
  border-radius:100%;
}
.form-check,
.form-check-input,
.form-check-label {
  cursor:pointer;
}
.radiobutton {
  width:20px;
  height:20px;
  vertical-align: sub;
}



</style>
 