<template>
  <v-col cols="12" class="padd">
    <div class="first" id="skills">
      <v-row>
        <v-col cols="12">
          <h3>What I work with</h3>
          <div v-for="item in work" :key="item" class="child">
            <v-btn :icon="item.icon" color="#FBDF7E" class="text-white" />
            <h3 class="ml-3 mt-4" v-text="item.title"/>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    work: [
      { icon: 'mdi-vuejs', title: 'Vue.js' },
      { icon: 'mdi-vuetify', title: 'Vuetify' },
      { icon: 'mdi-nodejs', title: 'Node.js' },
      { icon: 'mdi-language-html5', title: 'HTML5' },
      { icon: 'mdi-language-css3', title: 'CSS' },
      { icon: 'mdi-language-javascript', title: 'Javascript' },
      { icon: 'mdi-docker', title: 'Docker' }
    ]
  })
}
</script>

<style scoped>
.first {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}
</style>