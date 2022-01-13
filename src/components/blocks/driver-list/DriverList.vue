<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-3 gap-4">
      <aside class="mt-4">
        <div class="filter-cards text-gray-900 px-2 py-3">
          <div id="finishingStatusFilters" class="block px-2 py-3">
            <h2 class="font-medium text-gray-900 mb-4">Finishing status</h2>
            <div v-for="finishStatus in driverFinishStatuses" :key="finishStatus.key" class="form-check filter-item">
              <input
                class="form-check-input radiobutton mr-2 mb-4"
                type="radio"
                :id="finishStatus.status"
                :value="finishStatus.statusId"
                name="filteredby"
                v-model="selecetedFinishingStatus"
              />
              <label class="form-check-label" :for="finishStatus.status">{{finishStatus.status}}</label>
            </div>
          </div>
        </div>
      </aside>

      <div class="mt-10 col-span-2 ...">
        <p class="page-subheading">{{ driverCount }} drivers in total</p>
        <h1 class="page-title text-3xl font-bold">
          All drivers from 2021 season
        </h1>
        <div
          id="driverProfiles" class=" pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-">
          <div v-for="i in 12" :key="i" class=" box-placeholder mb-2 driver-profile bg-white rounded overflow-hidden shadow-lg">
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
          <div v-for="driver in list_allDrivers" :key="driver.key" class="driver-profile bg-white rounded overflow-hidden shadow-lg">
            <img class="w-full" v-if="driver.driverData[1]" :src="driver.driverData[1].driverImg" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                <p>{{ driver.driverData[0].givenName }} {{ driver.driverData[0].familyName }}</p>
              </div>
              <p class="text-gray-700 text-base">
                <a :href="'driver-results.html?driver=' + driver.driverId + ''" class="underline block profile-link" >View last season performance</a>
                <a :href="driver.url" target="_blank" rel="nofollow" class="underline block" >Read wikipedia entry</a>
              </p>
            </div>

            <div class="px-6 pt-4 pb-2">
              <span
                class=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">DOB<strong>{{ driver.driverData[0].dateOfBirth }}</strong></span>
              <span
                class=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Driver number<strong>{{driver.driverData[0].permanentNumber}}</strong></span>
              <span
                class=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Nationality<strong>{{ driver.driverData[0].nationality }}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  name: "DriverList",

  data() {
    return {
      selectedNationality: "",
      selecetedFinishingStatus: "",
      driverCount: [],
      allDrivers: [],
      driverFinishStatuses: [],
    };
  },
  created() {
    axios
      .get(`https://ergast.com/api/f1/current/status.json`)
      .then((response) => {
        this.driverFinishStatuses = response.data.MRData.StatusTable.Status;
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
              .get(`https://ergast.com/api/f1/current/drivers/${driverData[i].driverId}/status.json`)
              .then((response) => {
                driverFinishStatuses.push(response.data.MRData.StatusTable);
              });
       
          }

          return driverFinishStatuses;
        }
        //push the driver img locally to the correct driver obj for usage
        getEachDriver().then((response) => {
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
         
        });
      });

    //.catch(e => {
    //this.errors.push(e)
    //})
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
          let test7 = item.Status;
          
          let foundItem = _.find(test7, { statusId: finishingStatus });

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
 