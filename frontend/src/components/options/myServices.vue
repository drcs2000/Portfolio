<template>
  <v-col cols="12" sm="12" id="services">
    <div class="d-flex justify-center mb-6">
      <v-btn color="#FBDF7E" class="mr-2">Frontend Design</v-btn>
    </div>
  </v-col>
  <v-col cols="12" class="imgHover">
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" md="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
            <v-img src="../../assets/img0.png" height="225px" cover />
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
            <v-img src="../../assets/img1.jpeg" height="225px" cover />
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
            <v-img src="../../assets/img2.jpeg" height="225px" cover />
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-col>
  <v-col>
  </v-col>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'myServices',
  setup() {
    return {
      items: [
        {
          img: "i3.jpg",
        },
        {
          img: "i4.jpg",
        },
        {
          img: "i5.jpg",
        },
        {
          img: "i6.jpeg",
        },
        {
          img: "i9.jpg",
        },
        {
          img: "i8.jpg",
        },
      ],
    }
  }
})
</script>

<style scoped>
.imgHover {
  padding: 0 200px;
}
</style>
