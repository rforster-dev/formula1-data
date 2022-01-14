<template>
  <div v-if="nextRaceRound" class="bg-animated">
    <div class="container mx-auto px-5 pt-3 pb-3">
      <div class="text-center">
        <div class="">
          <p class="ml-3 font-medium text-white">
            <span class="nextrace-cta text-center md:inline">
              Round {{ nextRaceRound }} of the {{ nextRaceSeason }} season at
              the
              <a :href="nextRaceLink" target="_blank">{{ nextRaceName }}</a> on
              the {{ nextRaceDate }} is the next race
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HeroBanner",
  data() {
    return {
      nextRaceRound: [],
      nextRaceSeason: [],
      nextRaceName: [],
      nextRaceLink: [],
      nextRaceDate: [],
    };
  },
  created() {
    axios
      .get(`https://ergast.com/api/f1/2022/1.json`)
      .then((response) => {
        this.nextRaceSeason = response.data.MRData.RaceTable.season;
        this.nextRaceRound = response.data.MRData.RaceTable.round;
        this.nextRaceName = response.data.MRData.RaceTable.Races[0].raceName;
        this.nextRaceDate = response.data.MRData.RaceTable.Races[0].date;
        this.nextRaceLink = response.data.MRData.RaceTable.Races[0].url;
      })
      // if one of the elements doesnt load, then don't show it at all.
      // but lets log it incase
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        return error.message;
      })
      .then((error) => {
        if (error) {
          console.log(error);
        }
      });
  },
};
</script>

<style scoped>
.trophy-icon {
  color: goldenrod;
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