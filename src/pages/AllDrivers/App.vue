<template>
  <div>
      <Header/>
      <Driverlist/>
      <Footer/>
  </div> 
</template>

<script>
import '../../index.css'
import Driverlist from '../../components/blocks/driver-list/DriverList.vue'; 
import Header from '../../components/Header.vue'; 
import Footer from '../../components/Footer.vue'; 
export default {
  name: 'AllDrivers',
  components: {
    Driverlist,
    Header,
    Footer
  },
  created(){
    document.title = 'All drivers and finishing statuses'
    document.documentElement.setAttribute('lang','en-GB')
  }
}
</script>
