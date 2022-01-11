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
  }
}

/**
 * UI components
 * How many race wins did he get and points section
 * All competing teams logo
 * How many races did they go to
 * How many DNFS? 
 * Image gallery?
 * 
 */
</script>
