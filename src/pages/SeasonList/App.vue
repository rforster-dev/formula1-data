<template>
  <div>
      <Header/>
      <SeasonList/>
      <Footer/>
  </div> 
</template>

<script>
import '../../index.css'
import SeasonList from '../../components/blocks/season-list/SeasonList.vue'; 
import Header from '../../components/Header.vue'; 
import Footer from '../../components/Footer.vue'; 
export default {
  name: 'ChampionshipStanding',
  components: {
    SeasonList,
    Header,
    Footer
  },
  created(){
    document.title = "Race results"
    document.documentElement.setAttribute('lang','en-GB')
  }
}
</script>
