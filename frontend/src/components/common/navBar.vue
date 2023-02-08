<template>
  <v-app-bar fixed elevate-on-scroll app color="black">
    <v-toolbar-title>
      <v-img src="../../assets/wolf.png" width="75px" />
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text v-text="'Link One'" />
      <v-btn text v-text="'Link Two'" />
      <v-btn text v-text="'Link Three'" />
    </v-toolbar-items>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    />
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    search: '',
    collapseOnScroll: true,
  }),
}
</script>
