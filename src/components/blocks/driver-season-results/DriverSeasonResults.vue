<template>
  <div class="container mx-auto">
    <ErrorMessagesBlock :errorMessages="errorMessagesText" />
    <h1 class="mt-20 font-medium text-center text-3xl font-bold pb-10">
      Final classification
    </h1>
    <div
      class="
        page-title
        mt-10
        driver-season-result-top
        grid
        max-w-md
        gap-10
        row-gap-5
        lg:max-w-screen-lg
        sm:row-gap-10
        lg:grid-cols-3
        xl:max-w-screen-lg
        sm:mx-auto
      "
    >
      <div
        class="
          driver-finishtop3
          flex flex-col
          justify-between
          p-8
          transition-shadow
          duration-300
          bg-white
          border
          rounded
          shadow-sm
          sm:items-center
          hover:shadow
        "
        v-for="driverTop3 in AllDriverStandings.slice(0, 3)"
        :key="driverTop3.key"
      >
        <span class="trophy">🏆</span>
        <div
          v-if="driverTop3.Constructors[0].name.length"
          class="text-lg font-semibold"
        >
          {{ driverTop3.Constructors[0].name }}
        </div>
        <div
          v-if="driverTop3.Driver.givenName.length"
          class="flex items-center justify-center mt-2"
        >
          <div class="mr-1 text-3xl font-bold">
            {{ driverTop3.Driver.givenName }} {{ driverTop3.Driver.familyName }}
          </div>
        </div>
        <div class="mt-2 space-y-3">
          <div class="">
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              <div v-if="driverTop3.wins.length" class="text-center">
                <p class="text-4xl font-bold text-deep-purple-accent-400">
                  {{ driverTop3.wins }}
                </p>
                <p class="mb-2 font-bold text-md">Wins</p>
              </div>
              <div v-if="driverTop3.points" class="text-center">
                <p class="text-4xl font-bold text-deep-purple-accent-400">
                  {{ driverTop3.points }}
                </p>
                <p class="mb-2 font-bold text-md">Points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="mt-10 flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
              "
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Driver name
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Nationality
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Team
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="driver in AllDriverStandings" :key="driver.key">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div
                        v-if="driver.position.length"
                        class="text-sm font-bold"
                      >
                        {{ driver.position }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div
                        v-if="driver.Driver.givenName.length"
                        class="text-sm font-bold"
                      >
                        {{ driver.Driver.givenName }}
                        {{ driver.Driver.familyName }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div
                        v-if="driver.Driver.nationality.length"
                        class="text-sm font-bold"
                      >
                        {{ driver.Driver.nationality }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div
                        v-if="driver.Constructors.length"
                        class="text-sm font-bold"
                      >
                        {{ driver.Constructors[0].name }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div
                        v-if="driver.points.length"
                        class="text-sm font-bold"
                      >
                        {{ driver.points }}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ErrorMessagesBlock from "../error-messages/ErrorMessages.vue";

export default {
  name: "DriverSeasonResult",
  data() {
    return {
      AllDriverStandings: [],
      errorMessagesText: [],
    };
  },
  components: {
    ErrorMessagesBlock,
  },
  created() {
    axios
      .get(`https://ergast.com/api/f1/current/driverStandings.json`)
      .then((response) => {
        this.AllDriverStandings =
          response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
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
.driver-finishtop3 {
  text-align: center;
}
@media (min-width: 767px) {
  .driver-finishtop3:nth-child(1) {
    order: 2;
  }
  .driver-finishtop3:nth-child(2) {
    order: 1;
    margin-top: 5rem;
  }
  .driver-finishtop3:nth-child(3) {
    order: 3;
    margin-top: 10rem;
  }
}

/*sometimes rendering these in .rem units dont display*/
.driver-finishtop3:nth-child(1) .trophy {
  font-size: 100px;
}

.driver-finishtop3:nth-child(2) .trophy {
  font-size: 80px;
}

.driver-finishtop3:nth-child(3) .trophy {
  font-size: 60px;
}
</style>
 