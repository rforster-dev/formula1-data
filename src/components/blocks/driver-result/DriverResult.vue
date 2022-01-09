<template>
<!-- check if query is retrieved and if not, then show 404 error? -->
    <div>
        <div class="hero-banner--driver relative">
            <h2 v-if="givenName" class="driver-name">{{givenName}} {{familyName}}</h2>
            <h3 v-if="constructorTeam" class="constructor-name">{{constructorTeam}}</h3>

            <img v-if="constructorCar" :src="constructorCar"/>
            <!-- Driver car, nationality colours, race number, picture, and final standing for last season -->
        </div>
        <carousel :items-to-show="1">
        <slide v-for="(item) in allRaces" :key="item.key" class="driver-result" role="banner">

            
            <div  class="flex flex-row" style="display: flex;
  flex-wrap: wrap;" > 
             <h2 v-if="item.Circuit.circuitName" class="circuit-name" style="width:100%;"><span v-if="item.round" class="circuit-number">Round {{item.round}}</span>{{item.Circuit.circuitName}}</h2>
            <div style="width:100%;     justify-content: center; display: flex;W
    flex-wrap: wrap;
    width: 100%;" >
            
              
            <div class="race-stats" style="width:50%; text-align:left;">
                <p v-if="item.Results[0].grid"><span><img class="icon-stat" src="https://cdn-icons-png.flaticon.com/512/495/495499.png"/></span><span class="stat-label">Starting position</span> <strong class="stat-value">{{item.Results[0].grid}}</strong></p>
                <p v-if="item.Results[0].positionText"><span><img class="icon-stat" src="https://cdn-icons-png.flaticon.com/512/783/783470.png"/></span><span class="stat-label">Finished</span> <strong class="stat-value">{{item.Results[0].positionText}}</strong></p>
                <p v-if="item.Results[0].points"><span><img class="icon-stat" src="https://cdn-icons-png.flaticon.com/512/748/748113.png"/></span><span class="stat-label">Points gained</span> <strong class="stat-value">{{item.Results[0].points}}</strong></p>
            </div>
            <div class="race-stats" style="width:50%; text-align:left;">
            <p v-if="item.Results[0].laps"><span><img class="icon-stat" src="https://cdn-icons-png.flaticon.com/512/2825/2825126.png"/></span><span class="stat-label">Number of laps</span> <strong class="stat-value">{{item.Results[0].laps}}</strong></p>
            <p v-if="item.Results[0].FastestLap"><span><img class="icon-stat" src="https://cdn-icons-png.flaticon.com/512/3712/3712196.png"/></span><span class="stat-label">Best lap</span> <strong class="stat-value">{{item.Results[0].FastestLap.Time.time}}</strong></p>

            </div>
            </div>
       
           </div>
        </slide>
        <template #addons>
      <navigation />
   
    </template>
        </carousel>
     <ul v-if="errors && errors.length" >
                <li v-for="error of errors" :key="error.id">
                    {{error.message}}
                </li>
            </ul>
    </div>
</template>

<script>
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  name: 'DriverResult',
  
  data () {
    return {
        allRaces        : [],
        racesInSeason   : [],
        givenName       : [],
        familyName      : [],
        driverNumber    : [],
        constructorTeam : [],
        constructorCar  : []

    }
  },
  created() {
    
    let urlParams = new URLSearchParams(window.location.search);
    axios.get(`https://ergast.com/api/f1/current/drivers/${urlParams.get('driver')}/results.json`)
    .then(response => { 
         console.log(response.data.MRData.RaceTable.Races)
      
        this.allRaces           = response.data.MRData.RaceTable.Races
        this.racesInSeason      = response.data.MRData.total
        this.givenName          = response.data.MRData.RaceTable.Races[0].Results[0].Driver.givenName
        this.familyName         = response.data.MRData.RaceTable.Races[0].Results[0].Driver.familyName;
        this.driverNumber       = response.data.MRData.RaceTable.Races[0].Results[0].Driver.number;
        this.constructorTeam    = response.data.MRData.RaceTable.Races[0].Results[0].Constructor.name;
        this.constructorCar     = require('../../../assets/'+this.constructorTeam.toLowerCase().replace(' ','')+'.jpg');
        console.log(this.constructorCar);
    })
    //.catch(e => { 
      //this.errors.push(e)
    //})
  },
  components: {
    Carousel,
    Slide, 
    Navigation,
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
.circuit-name {
    font-weight:700;
    font-size:2rem;
    margin:2rem 0 4rem;
    text-align:left;
}
.driver-name {
     color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgba(31, 41, 55, 0.6);
    position:fixed;
    top:150px;
    left:2rem;
    right:0;
    text-transform:uppercase;
    margin:auto;
    width:100vw;
    height:50vh;
    font-size:4rem;
    text-align:left;
}
.constructor-name {
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgba(31, 41, 55, 0.2);
    position:fixed;
    top:250px;
    left:2rem;
    right:0;
    text-transform:uppercase;
    margin:auto;
    width:100vw;
    height:50vh;
    font-size:2em;
    text-align:left;
}


.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}

.icon-stat {
  width:30px;
  height:30px;
  display:inline-block;
  margin-right:0.5rem;

}

.stat-label,
.stat-value {
  display:inline-block;
}
.stat-value {
  text-align:right;
}

.race-stats p {
  margin-bottom:2rem;
}

.circuit-number {
display:block;
color:grey;
text-align:left;
font-weight:400;
font-size:1.25rem;
}

.carousel {
  z-index:100;
  background:#fff;
}

.carousel button {
  display:none;
}
</style>
 