<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="text-center" color="blue-darken-4">
      <v-card-text>
        <v-btn v-for="item in icons" :key="item" class="mx-4" icon :href="item.link">
          <v-icon size="24px" color="blue-darken-4">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Projeto criado por Davi Rangel Câmara da Silva, estudante de Sistemas de Informação na Universidade
        Federal de Viçosa no Campus de Rio Paranaíba.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>drcs2000</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'PageFooter',
  data: () => ({
    icons: [
      { icon: 'mdi-facebook', link:'https://www.facebook.com/davi.rangel.9843/' },
      { icon: 'mdi-twitter', link: 'https://twitter.com/drc_s2000' },
      { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/davi-rangel-86649b215/' },
      { icon: 'mdi-instagram', link: 'https://www.instagram.com/drc_s2000/' },
    ],
  })
}
</script>

<style>
.v-footer {
  padding: 8px 0 !important;
}
</style>