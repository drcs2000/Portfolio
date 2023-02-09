<template>
  <v-col cols="12">
    <div class="child" id="contact">
      <h1>Contact info.</h1>
      <v-row align="center">
        <v-col v-for="item in contact" :key="item" cols="4">
          <v-btn :icon="item.icon" class="mt-10" variant="outlined" disabled />
          <br />
          <span class="text-caption" v-text="item.text" />
        </v-col>
      </v-row>
    </div>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    contact: [
      { icon: 'mdi-map-marker-outline', text: 'Brasília, DF - Brazil' },
      { icon: 'mdi-phone-outline', text: '+55 (61) 983-744-515' },
      { icon: 'mdi-email-outline', text: 'davirangelcamara@gmail.com' }
    ]
  })
}
</script>

<style scoped>
.child {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}
</style>