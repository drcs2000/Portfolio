<template>
  <v-col cols="12" sm="12" class="px-16" id="contact">
    <v-row>
      <v-col cols="12" sm="4">
        <div class="child">
          <h1>Contact info.</h1>
          <v-btn icon="fas fa-map-marker-alt" color="" class="mt-10" variant="outlined"></v-btn><br />
          <span class="text-caption">Your Street SYO,yourArea Dream </span><br />
          <v-btn icon="fas fa-phone-alt" color="" class="mt-10" variant="outlined"></v-btn><br />
          <span class="text-caption">00235 - 6521 </span> <br />
          <span class="text-caption">00235 - 6521 </span> <br />
          <v-btn icon="fas fa-envelope" color="" class="mt-10" variant="outlined"></v-btn><br />
          <span class="text-caption">aaeideapro@gmail.com </span> <br />
          <span class="text-caption">aaeideapro@gmail.com </span> <br />
        </div>
      </v-col>
      <v-col cols="12" sm="8">
        <h1 class="mt-8">Send your message</h1>
        <v-divider></v-divider>
        <span class="text-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          fugiat officia, odio eaque exercitationem libero nesciunt placeat,
          repellat obcaecati sed tenetur! Est labore aliquam amet
          consequatur necessitatibus fugit obcaecati facilis!</span>
        <v-row class="mt-10">
          <v-col cols="12" sm="6">
            <v-text-field label="Name" persistent-hint variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Phone No" persistent-hint variant="outlined"></v-text-field>
          </v-col>
        </v-row>
        <v-textarea label="Message" persistent-hint variant="outlined"></v-textarea>
        <v-btn color="#FBDF7E" class="mt-2">Submit Now</v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<style scoped>
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}
</style>