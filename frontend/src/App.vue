<template>
  <v-app>
    <navBar />
    <v-container fluid>
      <aboutMe />
      <myPortfolio />
      <myServices />
      <myPage />
      <myBio />
      <contactMe />
    </v-container>
    <pageFooter />
  </v-app>
</template>

<script>
import navBar from './components/common/navBar.vue'
import pageFooter from './components/common/footer.vue'
import aboutMe from './components/options/aboutMe.vue'
import myPortfolio from './components/options/myPortfolio.vue'
import myServices from './components/options/myServices.vue'
import myPage from './components/options/myPage.vue'
import myBio from './components/options/myBio.vue'
import contactMe from './components/options/contactMe.vue'

export default {
  name: 'App',
  components: {
    navBar,
    pageFooter,
    aboutMe,
    myPortfolio,
    myServices,
    myPage,
    myBio,
    contactMe
  }
}
</script>
