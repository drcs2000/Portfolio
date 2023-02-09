<template>
  <div class="head">
    <v-row>
      <v-col cols="5">
        <div style="position: relative" class="mt-16">
          <h1 class="text-grey">Hello,</h1>
          <h1 class="text-white">I'm Davi Rangel</h1>
          <span class="text-grey">Web Developer</span><br />

          <v-btn tile dark class="text-yellow mt-8" variant="outlined">
            Contact me
          </v-btn>
        </div>
      </v-col>
      <v-col cols="2">
        <div class="down mt-16">
          <v-icon>mdi-arrow-down</v-icon>
        </div>
      </v-col>
      <v-col cols="5">
        <div style="position: relative; z-index: 9999" class="mt-16">
          <v-img src="i1.png" contain max-height="300" />
        </div>
      </v-col>
    </v-row>
  </div>
  <v-col cols="12" class="mt-16" id="about">
    <div>
      <v-row>
        <v-col cols="12" sm="6">
          <div class="egg">
            <v-img src="i2.png" max-height="300" />
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <h5 class="mt-16">About Me</h5>
          <div style="width: 120px">
            <v-slider v-model="slider2" color="yellow" label="track-color" />
          </div>
          <h4 class="mt-n4">I Am a Creative Web Designer</h4>
          <h4 class="">And Developer</h4>
          <p class="text-grey">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, ullam perspiciatis fugiat temporibus laboriosam
            accusamus tempora repellendus sequi sed cum dolorum vero est.
            Placeat dicta architecto reiciendis est veniam. Unde.
          </p>
          <br />
          <p class="text-grey">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, ullam perspiciatis fugiat temporibus laboriosam
            accusamus tempora repellendus sequi sed cum dolorum vero est.
            Placeat dicta architecto reiciendis est veniam. Unde.
          </p>
          <v-btn tile dark color="yellow" class="mt-4">
            Download Resume
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-col>
  <div class="text-center mt-4">
    <h2>What we Do</h2>
    <div style="width: 120px; margin: 0 auto">
      <v-slider v-model="slider2" color="yellow" label="track-color"></v-slider>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AbouteMe',
  setup() {
    return {
      slider2: 50,
    }
  }
})
</script>

<style scoped>
.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}

.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: #0D47A1;
  transform: skew(0deg, 6deg);
}

.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: #0D47A1;
  transform: skew(0deg, -6deg);
}

.down {
  position: absolute;
  z-index: 9999;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: #fbdf7e;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
</style>
