<template>
  <div class="container mx-auto max-w-screen-xl">
    <ErrorMessagesBlock :errorMessages="errorMessagesText" />
    <h1 class="mt-20 font-medium text-center text-3xl font-bold pb-10">
      Race results
    </h1>
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          <div
            v-for="race in allRaces2021"
            :key="race.key"
            class="race-item py-8 flex flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span
                v-if="race.round"
                class="race-round font-semibold title-font text-gray-700"
                >Round {{ race.round }}</span
              >
              <span
                v-if="race.date && race.time"
                class="race-timedate mt-1 text-gray-500 text-sm"
                >{{ race.date }} - {{ race.time }}</span
              >
              <p
                v-if="race.Circuit.Location"
                class="mt-1 text-gray-500 text-sm"
              >
                {{ race.Circuit.Location.locality }},
                {{ race.Circuit.Location.country }}
              </p>
              <a
                :href="`https://www.google.com/maps/place/${race.Circuit.Location.lat},${race.Circuit.Location.long}`"
                v-if="race.Circuit.Location"
                target="_blank"
                class="
                  race-gmap-link
                  text-indigo-800
                  inline-flex
                  items-center
                  mt-4
                "
              >
                Google maps
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <a
                :href="`${race.Circuit.url}`"
                v-if="race.Circuit.url"
                target="_blank"
                class="
                  race-wikilink
                  text-indigo-800
                  inline-flex
                  items-center
                  mt-4
                "
              >
                Wikipedia entry
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="md:flex-grow">
              <h2
                v-if="race.raceName"
                class="race-title text-2xl font-bold text-gray-900 md:text-3xl"
              >
                {{ race.raceName }}
              </h2>
              <div class="h-1 w-20 bg-indigo-800 rounded"></div>
              <section class="text-gray-600 body-font">
                <div class="container px-4 py-10 mx-auto">
                  <div class="flex flex-wrap -m-4 text-center">
                    <div
                      v-if="race.Results[0].Driver.givenName"
                      class="text-left p-2 sm:w-1/4 w-1/2"
                    >
                      <h2
                        class="
                          race-winner
                          title-font
                          font-medium
                          sm:text-2xl
                          text-1xl text-gray-900
                        "
                      >
                        {{ race.Results[0].Driver.givenName }}
                        {{ race.Results[0].Driver.familyName }}
                      </h2>
                      <p class="leading-relaxed">Winner</p>
                    </div>
                    <div
                      v-if="race.Results[0].Constructor"
                      class="text-left p-2 sm:w-1/4 w-1/2"
                    >
                      <h2
                        class="
                          race-constructor
                          title-font
                          font-medium
                          sm:text-2xl
                          text-1xl text-gray-900
                        "
                      >
                        {{ race.Results[0].Constructor.name }}
                      </h2>
                      <p class="leading-relaxed">Constructor</p>
                    </div>
                    <div
                      v-if="race.Results[0].laps"
                      class="text-left p-2 sm:w-1/4 w-1/2"
                    >
                      <h2
                        class="
                          race-laps
                          title-font
                          font-medium
                          sm:text-2xl
                          text-1xl text-gray-900
                        "
                      >
                        {{ race.Results[0].laps }}
                      </h2>
                      <p class="leading-relaxed">Laps</p>
                    </div>
                    <div
                      v-if="race.Results[0].Time"
                      class="text-left p-2 sm:w-1/4 w-1/2"
                    >
                      <h2
                        class="
                          race-finishtime
                          title-font
                          font-medium
                          sm:text-2xl
                          text-1xl text-gray-900
                        "
                      >
                        {{ race.Results[0].Time.time }}
                      </h2>
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
import axios from "axios";
import ErrorMessagesBlock from "../error-messages/ErrorMessages.vue";

export default {
  name: "DriverList",

  data() {
    return {
      allRaces2021: [],
      errorMessagesText: [],
    };
  },
  components: {
    ErrorMessagesBlock,
  },
  created() {
    axios
      .get(`https://ergast.com/api/f1/current/results/1.json`)
      .then((response) => {
        this.allRaces2021 = response.data.MRData.RaceTable.Races;
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
.page-title {
  margin: 0 0 1rem;
}
.page-subheading {
  margin: 0;
  font-size: 0.9rem;
  color: grey;
}
.driver-card {
  border-bottom: 1px solid silver;
  padding: 1rem 0.5rem;
}

.driver-img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
.form-check,
.form-check-input,
.form-check-label {
  cursor: pointer;
}
.radiobutton {
  width: 20px;
  height: 20px;
  vertical-align: sub;
}
</style>
 