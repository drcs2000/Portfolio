<template>
  <v-app id="home">
    <navBar />
    <v-container fluid>
      <aboutMe />
      <myPortfolio />
      <myServices />
      <contactMe />
    </v-container>
    <pageFooter />
  </v-app>
</template>

<script>
import navBar from './components/common/navBar.vue'
import pageFooter from './components/common/footer.vue'
import aboutMe from './components/options/aboutMe.vue'
import myPortfolio from './components/options/mySkills.vue'
import myServices from './components/options/myServices.vue'
import contactMe from './components/options/contactMe.vue'

export default {
  name: 'App',
  components: {
    navBar,
    pageFooter,
    aboutMe,
    myPortfolio,
    myServices,
    contactMe
  }
}
</script>
