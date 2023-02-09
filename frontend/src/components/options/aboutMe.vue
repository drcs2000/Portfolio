<template>
  <div class="head">
    <v-row>
      <v-col cols="5">
        <div style="position: relative" class="mt-16">
          <h1 class="text-grey">Hello,</h1>
          <h1 class="text-white">I'm Davi Rangel</h1>
          <span class="text-grey">Web Developer</span><br />

          <v-btn tile dark class="text-yellow mt-8" variant="outlined" href="https://wa.link/i01915">
            Contact me
          </v-btn>
        </div>
      </v-col>
      <v-col/>
      <v-col cols="5">
        <div style="position: relative; z-index: 9999" class="mt-16">
          <v-img src="../../assets/profile.png" contain max-height="300" />
        </div>
      </v-col>
    </v-row>
  </div>
  <v-col cols="12" class="mt-16" id="about">
    <div>
      <v-row>
        <v-col cols="12" sm="6">
          <div class="egg">
            <v-img src="../../assets/aboutme.png" max-height="280" />
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <h5 class="mt-16">About Me</h5>
          <br />
          <h4 class="mt-n4">I Am a Creative Web Developer</h4>
          <p class="text-grey">
            Hello, how are you doing? If you are here it means
            you're at least a bit interested about who am I, come
            along and I will tell everything you need to know!
          </p>
          <br />
          <p class="text-grey">
            I'm a frontend developer and student at the Universidade Federal de Viçosa in Brazil,
            I'm currently in my 7th semester. I've been working as a developer since July 2022,
            but my passion for programming came earlier. When I enrolled in the university,
            I was sure that I'd would hate my time there, but I was completely wrong and my life
            has been changed. Now I work in two different places at the same time: at Banco Afro,
            where I develop interfaces for our clients, and at Rede São Roque, where I make the interfaces
            for our employees, and in both jobs the primary framework is Vue for the frontend and
            Node for the backend. Recently I've taken on more responsibilities in Banco Afro,
            where I created some back-end applications.
          </p>
        </v-col>
      </v-row>
    </div>
  </v-col>
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
  transform: skew(0deg, 0deg);
}

.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: #0D47A1;
  transform: skew(0deg, 0deg);
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
