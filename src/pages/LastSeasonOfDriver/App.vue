<template>
<div>
    <Header/>
    <DriverResult/>
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
  }
}
</script>
