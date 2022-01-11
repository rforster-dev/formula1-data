

<template>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="hero-cta-title sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All {{totalRaces}} races decided it in the {{seasonYear}} season</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        
      </div>
      <p class="hero-cta-text lg:w-1/2 w-full leading-relaxed text-gray-500">It wasn't all plain sailing for all the drivers, it turned out that we had {{countClassifications}} different classifications in the 2021 season. Ranging from; <span class="inline" v-for="classification in allClassifications.splice(0,5)" :key="classification.key">{{classification.status}} ({{classification.count}}), </span><a class="hero-cta-link text-indigo-500 inline-flex items-center mt-4" href="/all-drivers.html">Driver classifications throughout the season <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></p>
     
    </div> 
    <div class="flex flex-wrap -m-4">
      <div v-for="race in firstThreeRaces" :key="race.key" class="hero-cta-firstraces xl:w-1/4 md:w-1/2 p-4">
        <div  class="bg-gray-100 p-6 rounded-lg">
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Race {{race.round}}</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{{race.raceName}}</h2>
          <p class="leading-relaxed text-base">The {{race.round}} race was at the {{race.raceName}} location in {{race.Circuit.Location.locality}}, {{race.Circuit.Location.country}} on the {{race.date}}</p>
        </div>
      </div>

      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="">
           <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">See where else we went</h1>
      <p class="leading-relaxed text-base">This year the F1 calendar took us to {{howManyCountries}} across the world, such as <span v-for="country in countriesList.splice(0,5)" :key="country.key">{{country.country}}, </span> and many others</p>
      <a href="/season-list.html" class="text-indigo-500 inline-flex items-center mt-4">View the season list
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"> 
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
        </div>
      </div>
    </div> 
  </div>
</section>


</template>

<script>
import axios from 'axios';
import _ from 'lodash'
export default {
  name: 'HeroDriverList',
  data () {
    return {
       totalRaces: [],
       seasonYear: [],
       firstThreeRaces: [],
       countriesList: [],
       howManyCountries: [],
       countClassifications: [],
       allClassifications: [],
       allConstructors: [],
       howManyConstructors: []
    }
  },
  created() {
    axios.get(`https://ergast.com/api/f1/current.json`)
    .then(response => { 
        //this.totalRaces         = response.data.MRData.total;
       // this.firstThreeRaces    = response.data.MRData.RaceTable.Races.splice(0,3);
        this.totalRaces = response.data.MRData.total;
        this.seasonYear = response.data.MRData.RaceTable.season;
        const RaceList = response.data.MRData.RaceTable.Races;
        let Countries = [];
        this.firstThreeRaces    = RaceList.splice(0,3);
        //let Countries = [];
        for(let i = 0; i < RaceList.length; i++) {
            Countries.push({'country': RaceList[i].Circuit.Location.country});
        }

        this.countriesList      = _.uniqBy(Countries, 'country');
        this.howManyCountries   = this.countriesList.length;
        
        

    })
    .catch(e => {
      this.errors.push(e)
    });

    axios.get(`https://ergast.com/api/f1/current/status.json`)
    .then(response => { 
        //this.totalRaces         = response.data.MRData.total;
       // this.firstThreeRaces    = response.data.MRData.RaceTable.Races.splice(0,3);
        this.countClassifications   = response.data.MRData.total;
        this.allClassifications     = response.data.MRData.StatusTable.Status
        console.log(this.allClassifications[2]);

    })
    .catch(e => {
      this.errors.push(e)
    });



    
  }
}
</script>