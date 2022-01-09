<template>
<div class="container mx-auto">
  <div class="grid grid-cols-3 gap-4">
    
    <aside class="... mt-4 ">
      <div class="filter-cards  text-gray-900 px-2 py-3">
       
          
          <div class="block px-2 py-3">
            <h2 class="font-medium text-gray-900 mb-4">Finishing status</h2>
            <div v-for="finishStatus in driverFinishStatuses" :key="finishStatus.key" class="form-check">
              <input class="form-check-input radiobutton mr-2 mb-4" type="radio" :id="finishStatus.status" :value="finishStatus.statusId" name="filteredby" v-model="selecetedFinishingStatus" />
              <label class="form-check-label" :for="finishStatus.status">{{finishStatus.status}}</label>

            </div>
          </div>
        
      </div>
    </aside>


    <div class="mt-10 col-span-2 ...">
      <p class="page-subheading">{{driverCount}} drivers in total</p>
      <h1 class="page-title text-3xl font-bold" >All drivers from 2021 season</h1>
    
      <div class="pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <div v-for="driver in list_allDrivers" :key="driver.key"  class="bg-white rounded overflow-hidden shadow-lg">
          <img class="w-full " v-if="driver.driverData[1]" :src="driver.driverData[1].driverImg"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{driver.driverData[0].givenName}} {{driver.driverData[0].familyName}}</div>
            <p class="text-gray-700 text-base">
              <a :href="'driver-results.html?driver='+driver.driverId+''" class="underline block">View last season performance</a>
              <a :href="driver.url" target="_blank" rel="nofollow" class="underline block">Read wikipedia entry</a>
            </p>
          </div>

        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">DOB <strong>{{driver.driverData[0].dateOfBirth}}</strong></span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Driver number <strong>{{driver.driverData[0].permanentNumber}}</strong></span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Nationality <strong>{{driver.driverData[0].nationality}}</strong></span>
        </div>
      </div>

</div>

      
   
    </div>
      

    
    </div>
 



  </div>


  
    
</template>

<script>

import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'DriverList',
  
  data () {
    return {
        selectedNationality       : '',
        selecetedFinishingStatus  : '',
        driverCount               : [],
        allDrivers                : [],
        driverFinishStatuses      : [],
        

    }
  },
  created() {

  axios.get(`https://ergast.com/api/f1/current/status.json`)
  .then(response => {
    this.driverFinishStatuses = response.data.MRData.StatusTable.Status;
  })






    
    //let FilterGroups = [];
    let allDrivers_ = [];
     axios.get(`https://ergast.com/api/f1/current/drivers.json`)
    .then(response => { 
         
        this.driverCount  = response.data.MRData.total;
        allDrivers_       = response.data.MRData.DriverTable.Drivers;
        
        //this.allDrivers         = response.data.MRData.DriverTable.Drivers;
        
        //let driverStatus;
        return allDrivers_
    }).then(response => {
      async function myFetch() {
        let driverFinishStatuses = [];
        let test = response;
        console.log(test.length);

        for(let i = 0; i < test.length; i++) {
            //let driver = this.allDrivers[i].driverId;
          //let nationalityDriver =this.allDrivers[i].nationality
            
            await axios.get(`https://ergast.com/api/f1/current/drivers/${test[i].driverId}/status.json`)
            .then(response =>{
              
            driverFinishStatuses.push(
              response.data.MRData.StatusTable
            ) 


            //let test2=  _.merge(_.keyBy(allDrivers_, 'driverId'), _.keyBy(driverFinishStatuses, 'driverId'));
            //this.allDrivers.push(test2)
         });
          //this.allDrivers = driverFinishStatuses;
           
        }
        
        return driverFinishStatuses
        }
         myFetch()
    .then(response =>{
     allDrivers_.map((child) => {
        for (let parent of response) {
          if (parent.driverId == child.driverId) {
            if (!parent.driverData) {
              parent.driverData = [];
            }
            parent.driverData.push(child);
            parent.driverData.push({
              driverImg: require(`../../../assets/drivers/${child.driverId.toLowerCase().replace(' ','')}.png`)
            })
          }
        }
      });

      this.allDrivers = response;
     // console.log(allDrivers_);
      
      

      
          
     // let test3 = response;
      //let test4=  _.merge(_.keyBy(test3, 'driverId'), _.keyBy(driverFinishStatuses, 'driverId'));
      //ty8s
       
    })
    })

   
    
    //.catch(e => { 
      //this.errors.push(e)
    //})
  },

  computed: {
    list_allDrivers: function () {
      let filterNationality = this.selectedNationality
      let finishingStatus   = this.selecetedFinishingStatus
      //let filterSize = this.selectedSize
     //console.log(this.allDrivers)
      return this.allDrivers.filter(function(item){
        let filtered = true
        if(filterNationality && filterNationality.length > 0){
          filtered = item.driverData[0].nationality == filterNationality
        } 
        
        if(finishingStatus && finishingStatus.length > 0){
          
          let test7 = item.Status
          //console.log(test7)
          //filtered = item.Status.statusId == finishingStatus
          let foundItem = _.find(test7,{statusId: finishingStatus})
          
          if(foundItem){
            //console.log(foundItem);
            filtered =  foundItem.statusId == finishingStatus
            //console.log(filtered)
            //console.log(filtered);
            
          } else {
            filtered = ''
          }
         
        }
        /*
        if(filtered){
          if(filterSize && filterSize.length > 0){
            filtered = item.size == filterSize
          }
        }
        */
       console.log(item);
        return filtered
      })
    }
    
  }
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
 