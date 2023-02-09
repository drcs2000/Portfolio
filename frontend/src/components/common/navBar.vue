<template>
  <v-app-bar app color="blue-darken-4" dark flat class="px-12">
    <v-btn>
      <v-icon color="yellow" left class="mr-2">mdi-account</v-icon> Davi
    </v-btn>
    <v-spacer />
    <v-btn text @click="scroll('home')" class="text-yellow">Home</v-btn>
    <v-btn text v-for="item in options" :key="item" @click="scroll(item.to)" v-text="item.name" />
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    options: [
      { name: 'About', to: 'about' },
      { name: 'Portfolio', to:'portfolio' },
      { name: 'Services', to:'services' },
      { name: 'Page', to:'page' },
      { name: 'Bio', to:'bio' },
      { name: 'Contact', to:'contact' }
    ]
  }),
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
