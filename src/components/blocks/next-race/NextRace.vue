<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-animated">
  <div class="container mx-auto px-5 pt-3 pb-3">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <span class="flex p-2 rounded-lg bg-indigo-800">
          <!-- Heroicon name: outline/speakerphone -->
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </span>
        <p class="ml-3 font-medium text-white truncate">
          <span class="nextrace-cta md:inline">
            Round {{nextRaceRound}} of the {{nextRaceSeason}} season at the <a :href="nextRaceLink" target="_blank">{{nextRaceName}}</a> on the {{nextRaceDate}} is the next race
          </span>
        </p>
      </div>
      
    </div>
  </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'HeroBanner',
  data () {
    return {
        nextRaceRound: [],
        nextRaceSeason: [],
        nextRaceName: [],
        nextRaceLink: [],
        nextRaceDate: []
    }
  },
  created() {
    axios.get(`https://ergast.com/api/f1/2022/1.json`)
    .then(response => { 
        this.nextRaceSeason      = response.data.MRData.RaceTable.season;
        this.nextRaceRound      = response.data.MRData.RaceTable.round;
        this.nextRaceName       = response.data.MRData.RaceTable.Races[0].raceName;
        this.nextRaceDate       = response.data.MRData.RaceTable.Races[0].date;
        this.nextRaceLink       = response.data.MRData.RaceTable.Races[0].url;
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

.bg-animated {
     background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 30s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}


</style>