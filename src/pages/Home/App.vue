<template>
  <div class="flex flex-col h-screen justify-between">
      <Header/>
      <HeroBanner />
      <HeroCTA />
      <TeamList />
      <Footer/>
  </div> 
</template>

<script>
import '../../index.css'
import HeroBanner from '../../components/blocks/hero-banner/HeroBanner.vue'; 
import HeroCTA from '../../components/blocks/hero-cta/HeroCTA.vue'; 
import TeamList from '../../components/blocks/team-list/TeamList.vue'; 
import Header from '../../components/Header.vue'; 
import Footer from '../../components/Footer.vue'; 
export default {
  name: 'HomeApp',
  components: {
    HeroBanner,
    HeroCTA,
    TeamList,
    Header,
    Footer
  },
  created(){
    document.title = 'Home'
    document.documentElement.setAttribute('lang','en-GB')
  }
}


</script>
