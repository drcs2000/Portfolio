<template>
  <v-col cols="12" class="padd" id="portfolio">
    <div class="first" id="project">
      <v-row>
        <v-col cols="12">
          <div class="child">
            <v-btn icon="fas fa-laptop" color="#FBDF7E" class="text-white"></v-btn>
            <h3 class="ml-3 mt-4">Web Design</h3>
            <p class="text-grey ml-3 mt-4 text-caption">
              Lorem, ipsum dolor sit amet <br />consectetur adipisicing
              <br />consectetur adipis
            </p>
          </div>
          <div class="child">
            <v-btn icon="fas fa-mobile-alt" color="#FBDF7E" class="text-white"></v-btn>
            <h3 class="ml-3 mt-4">App Design</h3>
            <p class="text-grey ml-3 mt-4 text-caption">
              Lorem, ipsum dolor sit amet <br />consectetur adipisicing
              <br />consectetur adipis
            </p>
          </div>
          <div class="child">
            <v-btn icon="fas fa-camera" color="#FBDF7E" class="text-white"></v-btn>
            <h3 class="ml-3 mt-4">Photography</h3>
            <p class="text-grey ml-3 mt-4 text-caption">
              Lorem, ipsum dolor sit amet <br />consectetur adipisicing
              <br />consectetur adipis
            </p>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
  </v-col>
</template>

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