<template>
  <v-app>
    <v-main>
      <navBar />
      <pageFooter />
    </v-main>
  </v-app>
</template>

<script>
import navBar from './components/common/navBar.vue'
import pageFooter from './components/common/footer.vue'

export default {
  name: 'App',
  components: {
    navBar,
    pageFooter
  }
}
</script>
