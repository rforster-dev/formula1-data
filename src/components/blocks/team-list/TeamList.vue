
<template>
<div>
<section class="py-20 bg-gray-100 my-20">
    <div class="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto  items-center max-w-6xl mx-auto">
      <div class="px-4 md:mr-6">
        <h3 class="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
         Who competed in the thrilling 2021 season?
        </h3>
        <p class="mt-4 text-stone-800 text-xl font-medium">
          <span id="totalteams">{{howManyConstructors}}</span> teams were fighting for it in the constructors championship.
        </p>
        <p><span v-for="constructor in constructors" :key="constructor.key">{{constructor.teamName}}, </span></p>
      </div>
      <div>
        <div class="absolute md:rounded-md bg-animated transform -translate-x-10 relative h-64">
        </div>
        <div class="transform md:rounded-md  bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl -ml-4 -mt-44 p-12  space-y-2">
          <div class="px-4 sm:px-0 grid grid-cols-5 sm:grid-cols-4 gap-2 sm:gap-8 max-w-5xl mx-auto">
            <a  class="constructor-logos" v-for="constructor in constructors" :key="constructor.key" :href="constructor.wikiLink" target="_blank">
              <img :src="constructor.img"/>      
            </a>
                   
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TeamList',
    data () {
      return {
        howManyConstructors:  [],
        constructors:       []
      }
    },
    created() {
      axios.get(`https://ergast.com/api/f1/current/constructors.json`)    
      .then(response => { 

          this.howManyConstructors      = response.data.MRData.total;
          let allConstructors          = response.data.MRData.ConstructorTable.Constructors;
          console.log(allConstructors)
          for(let i = 0; i < allConstructors.length; i++) {
              this.constructors.push({
                'teamName'  :  allConstructors[i].name,
                'img'       : require('../../../assets/constructors/'+allConstructors[i].constructorId+'.jpg'),
                'wikiLink'  : allConstructors[i].url
              })
          } 

          console.log(this.constructors)
        


      })
      //.catch(e => {
      //  this.errors.push(e)
      //})
    }
  }



</script>
<style scoped>


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