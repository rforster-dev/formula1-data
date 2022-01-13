<template>
  <div>
      <Header/>
      <DriverSeasonResults/>
      <Footer/>
  </div> 
</template>

<script>
import '../../index.css'
import DriverSeasonResults from '../../components/blocks/driver-season-results/DriverSeasonResults.vue'; 
import Header from '../../components/Header.vue'; 

import Footer from '../../components/Footer.vue'; 
export default {
  name: 'ChampionshipStanding',
  components: {
    DriverSeasonResults,
    Header,
    Footer
  },
  created(){
    document.title = 'Final championship standings'
    document.documentElement.setAttribute('lang','en-GB')
  }
}
</script>
