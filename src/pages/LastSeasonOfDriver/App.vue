<template>
  <div>
      <Header/>
      <DriverResult :driverID="driver.driverID"/>
      <Footer/>
  </div> 
</template>

<script>

import '../../index.css'
import DriverResult from '../../components/blocks/driver-result/DriverResult.vue'; 
import Header from '../../components/Header.vue'; 
import Footer from '../../components/Footer.vue'; 
export default {
  name: 'LastSeasonOfDriver',
  components: {
    DriverResult,
    Header,
    Footer
  },
 
  data(){
    return{
      driver: {
       driverID: new URLSearchParams(window.location.search)
     }
     // urlParam: new URLSearchParams(window.location.search)
    }
  }, 
  created(){
    document.title = 'Last season result of driver'
    document.documentElement.setAttribute('lang','en-GB')
  }

}
</script>
