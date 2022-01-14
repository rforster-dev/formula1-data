<template>
  <div>
    <img
      class="constructor-image"
      v-if="constructorCar.length"
      :src="constructorCar"
      :alt="`Car of ${constructorTeam}`"
    />
    <div class="px-4 py-12 mx-auto sm:px-6 lg:px-8 text-center">
      <ErrorMessagesBlock :errorMessages="errorMessagesText" />
      <h1 v-if="givenName.length" class="font-medium text-3xl my-2">
        {{ givenName }} {{ familyName }}
      </h1>
      <h2 v-if="constructorTeam.length" class="font-medium text-3xl mb-2">
        {{ constructorTeam }}
      </h2>
    </div>
    <section class="text-gray-600 body-font">
      <div class="container max-w-screen-xl px-5 mx-auto flex flex-wrap">
        <div
          class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"
          v-for="item in allRaces"
          :key="item.key"
        >
          <div
            class="h-full w-6 absolute inset-7 flex items-center justify-center"
          >
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div
            class="
              flex-shrink-0
              w-20
              h-20
              rounded-full
              mt-10
              sm:mt-0
              inline-flex
              items-center
              justify-center
              bg-red-500
              text-white
              relative
              z-10
              title-font
              font-medium
              text-xl
            "
          >
            {{ item.round }}
          </div>
          <div
            class="
              flex-grow
              md:pl-8
              pl-6
              flex
              sm:items-center
              items-start
              flex-col
              sm:flex-row
            "
          >
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <p class="font-medium title-font text-gray-900 text-3xl mb-10">
                {{ item.Circuit.circuitName }}
              </p>
              <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <img
                      class="icon-stat"
                      src="https://cdn-icons-png.flaticon.com/512/495/495499.png"
                    />
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      {{ item.Results[0].grid }}
                    </h2>
                    <p class="leading-relaxed">Starting position</p>
                  </div>
                </div>

                <div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <img
                      class="icon-stat"
                      src="https://cdn-icons-png.flaticon.com/512/783/783470.png"
                    />
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      {{ item.Results[0].grid }}
                    </h2>
                    <p class="leading-relaxed">Starting position</p>
                  </div>
                </div>

                <div class="p-4 lg:w-1/4 md:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <img
                      class="icon-stat"
                      src="https://cdn-icons-png.flaticon.com/512/495/495499.png"
                    />
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      {{ item.Results[0].positionText }}
                    </h2>
                    <p class="leading-relaxed">Finishing position</p>
                  </div>
                </div>

                <div class="p-4 lg:w-1/4 md:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <img
                      class="icon-stat"
                      src="https://cdn-icons-png.flaticon.com/512/748/748113.png"
                    />
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      {{ item.Results[0].points }}
                    </h2>
                    <p class="leading-relaxed">Points earnt</p>
                  </div>
                </div>

                <div class="p-4 lg:w-1/4 md:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <img
                      class="icon-stat"
                      src="https://cdn-icons-png.flaticon.com/512/748/748113.png"
                    />
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      {{ item.Results[0].points }}
                    </h2>
                    <p class="leading-relaxed">Points earnt</p>
                  </div>
                </div>

                <div class="p-4 lg:w-1/4 md:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <img
                      class="icon-stat"
                      src="https://cdn-icons-png.flaticon.com/512/2825/2825126.png"
                    />
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      {{ item.Results[0].laps }}
                    </h2>
                    <p class="leading-relaxed">Laps completed</p>
                  </div>
                </div>

                <div
                  class="p-4 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full"
                  v-if="item.Results[0].FastestLap"
                >
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <img
                      class="icon-stat"
                      src="https://cdn-icons-png.flaticon.com/512/3712/3712196.png"
                    />
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      {{ item.Results[0].FastestLap.Time.time }}
                    </h2>
                    <p class="leading-relaxed">Fastest lap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import ErrorMessagesBlock from "../error-messages/ErrorMessages.vue";

export default {
  name: "DriverResult",
  props: ["driverID"],

  data() {
    return {
      allRaces: [],
      racesInSeason: [],
      givenName: [],
      familyName: [],
      driverNumber: [],
      constructorTeam: [],
      constructorCar: [],
      retrievedDriverQ: this.driverID,
      errorMessagesText: [],
    };
  },
  components: {
    ErrorMessagesBlock,
  },
  created() {
    // check if its set from unit testing, otherwise pull it from the query in the URL
    let urlParams;
    if (!this.retrievedDriverQ) {
      console.log(this.retrievedDriverQ);
      urlParams = this.retrievedDriverQ;
    } else {
      let urlParams2 = window.location.search;
      urlParams = urlParams2.replace("?driver=", "");
    }

    axios
      .get(
        `https://ergast.com/api/f1/current/drivers/${urlParams}/results.json`
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.data.MRData.RaceTable.Races);

        this.allRaces = response.data.MRData.RaceTable.Races;
        this.racesInSeason = response.data.MRData.total;
        this.givenName =
          response.data.MRData.RaceTable.Races[0].Results[0].Driver.givenName;
        this.familyName =
          response.data.MRData.RaceTable.Races[0].Results[0].Driver.familyName;
        this.driverNumber =
          response.data.MRData.RaceTable.Races[0].Results[0].Driver.number;
        this.constructorTeam =
          response.data.MRData.RaceTable.Races[0].Results[0].Constructor.name;
        this.constructorCar = require("../../../assets/" +
          this.constructorTeam.toLowerCase().replace(" ", "") +
          ".jpg");
        console.log(this.constructorCar);
      })
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
          this.errorMessagesText.push(
            "Looks like we had trouble fetching the data. Please try again."
          );
        }
      });
  },
};
</script>

<style scoped>
@media (min-width: 767px) {
  .round-item:nth-child(even) .round-number {
    order: 2;
  }
  .round-item:nth-child(even) .round-info {
    order: 1;
  }
}
.icon-stat {
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-right: 0.5rem;
}
.constructor-image {
  width: 100%;
  object-fit: contain;
}
</style>
 