<template>
  <div class="container mx-auto">
    <ErrorMessagesBlock :errorMessages="errorMessagesText" />
    <section>
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <div class="llg:top-4">
            <details
              v-if="!errorMessages"
              open
              class="overflow-hidden border border-gray-200 rounded"
            >
              <summary
                class="
                  flex
                  items-center
                  justify-between
                  px-5
                  py-3
                  bg-gray-100
                  lg:hidden
                "
              >
                <span class="text-sm font-medium"> Toggle Filters </span>

                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>

              <div class="border-t p-5 border-gray-200 lg:border-t-0">
                <p class="text-2xl font-medium mb-5">Finishing status</p>
                <div
                  v-for="finishStatus in driverFinishStatuses"
                  :key="finishStatus.key"
                  class="form-check filter-item"
                >
                  <input
                    class="form-check-input radiobutton mr-2 mb-4"
                    type="radio"
                    :id="finishStatus.status"
                    :value="finishStatus.statusId"
                    name="filteredby"
                    v-model="selecetedFinishingStatus"
                  />
                  <label class="form-check-label" :for="finishStatus.status">{{
                    finishStatus.status
                  }}</label>
                </div>
              </div>
            </details>
          </div>

          <div class="lg:col-span-3">
            <p class="page-subheading">{{ driverCount }} drivers in total</p>
            <h1 class="page-title text-3xl font-bold">
              All drivers from 2021 season
            </h1>

            <div
              class="
                all-drivers
                grid grid-cols-1
                gap-px
                mt-4
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              <div
                v-for="i in 12"
                :key="i"
                class="
                  box-placeholder
                  mb-2
                  p-2
                  driver-profile
                  bg-white
                  rounded
                  overflow-hidden
                  shadow-lg
                "
              >
                <div class="image">
                  <div class="embed-responsive embed-responsive-16by9"></div>
                </div>
                <div class="p-4">
                  <span class="category text link"></span>
                  <h4 class="text line"></h4>
                  <h4 class="text"></h4>
                </div>
                <hr />
              </div>
              <div
                v-for="driver in list_allDrivers"
                :key="driver.key"
                class="driver-profile overflow-hidden"
              >
                <img
                  class="driver-img"
                  v-if="driver.driverData[1]"
                  :src="driver.driverData[1].driverImg"
                  :alt="
                    driver.driverData[0].givenName +
                    ' ' +
                    driver.driverData[0].familyName
                  "
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">
                    <p>
                      {{ driver.driverData[0].givenName }}
                      {{ driver.driverData[0].familyName }}
                    </p>
                  </div>
                  <p class="text-gray-700 text-base">
                    <a
                      :href="
                        'driver-results.html?driver=' + driver.driverId + ''
                      "
                      class="underline block profile-link"
                      >View last season performance</a
                    >
                    <a
                      :href="driver.url"
                      target="_blank"
                      rel="nofollow"
                      class="underline block"
                      >Read wikipedia entry</a
                    >
                  </p>
                </div>

                <div class="px-6 pt-4 pb-2">
                  <span
                    class="
                      inline-block
                      bg-gray-200
                      rounded-full
                      px-3
                      py-1
                      text-sm
                      font-semibold
                      text-gray-700
                      mr-2
                      mb-2
                    "
                    >DOB
                    <strong>{{
                      driver.driverData[0].dateOfBirth
                    }}</strong></span
                  >
                  <span
                    class="
                      inline-block
                      bg-gray-200
                      rounded-full
                      px-3
                      py-1
                      text-sm
                      font-semibold
                      text-gray-700
                      mr-2
                      mb-2
                    "
                    >Driver number
                    <strong>{{
                      driver.driverData[0].permanentNumber
                    }}</strong></span
                  >
                  <span
                    class="
                      inline-block
                      bg-gray-200
                      rounded-full
                      px-3
                      py-1
                      text-sm
                      font-semibold
                      text-gray-700
                      mr-2
                      mb-2
                    "
                    >Nationality
                    <strong>{{
                      driver.driverData[0].nationality
                    }}</strong></span
                  >
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
import _ from "lodash";
import ErrorMessagesBlock from "../error-messages/ErrorMessages.vue";

window.addEventListener("resize", () => {
  const desktopScreen = window.innerWidth < 768;
  document.querySelector("details").open = !desktopScreen;
});

export default {
  name: "DriverList",

  data() {
    return {
      selectedNationality: "",
      selecetedFinishingStatus: "",
      driverCount: [],
      allDrivers: [],
      driverFinishStatuses: [],
      errorMessagesText: [],
    };
  },
  components: {
    ErrorMessagesBlock,
  },
  created() {
    axios
      .get(`https://ergast.com/api/f1/current/status.json`)
      .then((response) => {
        this.driverFinishStatuses = response.data.MRData.StatusTable.Status;
      })
      // catch any errors that come from this
      // Probably best to gracefully degrade and show a message to the user - perhaps to refresh the page to try again
      // might want to log them to a back office system for alerting/notifications for active monitoring
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

    //let FilterGroups = [];
    let allDrivers_ = [];
    axios
      .get(`https://ergast.com/api/f1/current/drivers.json`)
      .then((response) => {
        this.driverCount = response.data.MRData.total;
        allDrivers_ = response.data.MRData.DriverTable.Drivers;
        return allDrivers_;
      })

      .then((response) => {
        async function getEachDriver() {
          let driverFinishStatuses = [];
          let driverData = response;
          //console.log(driverData.length);

          for (let i = 0; i < driverData.length; i++) {
            await axios
              .get(
                `https://ergast.com/api/f1/current/drivers/${driverData[i].driverId}/status.json`
              )
              .then((response) => {
                driverFinishStatuses.push(response.data.MRData.StatusTable);
              });
          }

          return driverFinishStatuses;
        }
        //push the driver img locally to the correct driver obj for usage
        getEachDriver()
          .then((response) => {
            allDrivers_.map((child) => {
              for (let parent of response) {
                if (parent.driverId == child.driverId) {
                  if (!parent.driverData) {
                    parent.driverData = [];
                  }
                  parent.driverData.push(child);
                  parent.driverData.push({
                    driverImg: require(`../../../assets/drivers/${child.driverId
                      .toLowerCase()
                      .replace(" ", "")}.png`),
                  });
                }
              }
            });
            //remove placeholder loader boxes now the data has come back
            const elements = document.getElementsByClassName("box-placeholder");
            while (elements.length > 0) elements[0].remove();
            this.allDrivers = response;
          })
          // catch any errors that come from this
          // Probably best to gracefully degrade and show a message to the user - perhaps to refresh the page to try again
          // might want to log them to a back office system for alerting/notifications for active monitoring
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
      })
      // catch any errors that come from this
      // Probably best to gracefully degrade and show a message to the user - perhaps to refresh the page to try again
      // might want to log them to a back office system for alerting/notifications for active monitoring
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

  computed: {
    //on update of filter, amend the driverList view with returned drivers
    list_allDrivers: function () {
      let filterNationality = this.selectedNationality;
      let finishingStatus = this.selecetedFinishingStatus;

      return this.allDrivers.filter(function (item) {
        let filtered = true;
        if (filterNationality && filterNationality.length > 0) {
          filtered = item.driverData[0].nationality == filterNationality;
        }

        if (finishingStatus && finishingStatus.length > 0) {
          let itemStatus = item.Status;

          let foundItem = _.find(itemStatus, { statusId: finishingStatus });

          if (foundItem) {
            filtered = foundItem.statusId == finishingStatus;
          } else {
            filtered = "";
          }
        }

        return filtered;
      });
    },
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
  color: darkslategrey;
}

.driver-profile {
  border-bottom: 1px solid lightgrey;
}
.driver-profile:nth-child(3n + 2) {
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
}
.driver-card {
  border-bottom: 1px solid darkslategrey;
  padding: 1rem 0.5rem;
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

.box hr,
.box-placeholder hr {
  margin: 0;
  border-color: #f3f3f3;
}
.box {
  display: none;
}
.box .category {
  display: block;
  margin-bottom: 10px;
}
.box img {
  max-width: 100%;
}
.box-placeholder {
  font-size: 0;
  line-height: 0;
}
.box-placeholder .text {
  display: inline-block;
  background-color: #444;
  height: 12px;
  border-radius: 100px;
  margin: 5px 0;
  min-width: 100px;
  opacity: 0.1;
  animation: fading 1.5s infinite;
}
.box-placeholder .text:first-child {
  margin-top: 0;
}
.box-placeholder .text:last-child {
  margin-bottom: 0;
}
.box-placeholder .text.link {
  background-color: var(--blue);
  opacity: 0.4;
}
.box-placeholder .text.line {
  width: 100%;
}
.box-placeholder .text.category {
  width: 100px;
  margin-bottom: 10px;
}
.box-placeholder h4.text {
  height: 20px;
  margin: 3px 0;
  opacity: 0.2;
}
.box-placeholder .image {
  background-color: #eee;
  width: 100%;
  height: 100px;
}
@keyframes fading {
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.1;
  }
}
</style>
 