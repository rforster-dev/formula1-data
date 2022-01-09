<template>
<!-- check if query is retrieved and if not, then show 404 error? -->
    <div class="container mx-auto">
          <h1 class="mt-20 font-medium text-center text-3xl font-bold pb-10">Final classification</h1>
      <div class="mt-10 driver-season-result-top grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        
        <div class="driver-finishtop3 flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow" v-for="driverTop3 in AllDriverStandings.slice(0,3)" :key="driverTop3.key">
          <span class="trophy">🏆</span>
          <div class="text-lg font-semibold">{{driverTop3.Constructors[0].name}}</div>
          
          <div class="flex items-center justify-center mt-2">
          <div class="mr-1 text-3xl font-bold">{{driverTop3.Driver.givenName}} {{driverTop3.Driver.familyName}}</div>
        </div>
           <div class="mt-2 space-y-3">


        <div class="">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div class="text-center">
              <div class="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                <svg class="w-8 h-8 text-teal-900 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg>
              </div>
              
              
                <h6 class="text-4xl font-bold text-deep-purple-accent-400">{{driverTop3.wins}}</h6>
              <p class="mb-2 font-bold text-md">Wins</p>
            </div>
            <div class="text-center">
              <div class="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                <svg class="w-8 h-8 text-teal-900 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg>
              </div>
              <h6 class="text-4xl font-bold text-deep-purple-accent-400">{{driverTop3.points}}</h6>
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
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               Position
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Driver name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nationality
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Team
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Points
              </th>
   
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="driver in AllDriverStandings" :key="driver.key">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold">
                  {{driver.position}}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold">
                      {{driver.Driver.givenName}} {{driver.Driver.familyName}}
                    </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold">
                      {{driver.Driver.nationality}} 
                    </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap ">
              <div class="text-sm font-bold">
                      {{driver.Constructors[0].name}} 
                    </div>
              </td>
               <td class="px-6 py-4 whitespace-nowrap ">
               <div class="text-sm font-bold">
                      {{driver.points}} 
                    </div>
              </td>
            </tr>

            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>



        <div  v-for="driver in AllDriverStandings" :key="driver.key">
          
        </div>
      </div>



    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DriverSeasonResult',
  
  data () {
    return {
        AllDriverStandings        : [],
      

    }
  },
  created() {
    
    //Wlet urlParams = new URLSearchParams(window.location.search);
    axios.get(`http://ergast.com/api/f1/current/driverStandings.json`)
    .then(response => { 
            console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
      
            this.AllDriverStandings           = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings

    })
    //.catch(e => { 
      //this.errors.push(e)
    //})
  },
  
}

/**@todo
 * - Style carousel arrows
 * - Add "team mate" function?
 * - Link to all drivers
 * 
 */
</script>

<style scoped>
.driver-finishtop3 {
  text-align:center;
}
.driver-finishtop3:nth-child(1){
  order:2;
}

.driver-finishtop3:nth-child(1) .trophy{
  font-size:9rem;
}
.driver-finishtop3:nth-child(2){
  order:1;
   margin-top:5rem;
}
.driver-finishtop3:nth-child(2) .trophy{
  font-size:6rem;
 
}
.driver-finishtop3:nth-child(3){
  order:3;
   margin-top:10rem;
}
.driver-finishtop3:nth-child(3) .trophy{
  font-size:2.6rem;
  
}
</style>
 