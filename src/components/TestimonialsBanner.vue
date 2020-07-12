<template>
  <v-container class="my-5">
    <v-row class="fill-height" justify="center" align="center">
      <v-col cols="2" v-for="image in images" :key="image">
        <v-img contain max-height="50" :src="image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import amazonLogo from '../assets/img/amazon-logo.png'
import fedexLogo from '../assets/img/fedex-logo.png'
import toptalLogo from '../assets/img/toptal-logo.png'
import xpoLogo from '../assets/img/xpo-logo.png'
export default {
  name: 'Testimonials',
  data() {
    return {
      images: [amazonLogo, fedexLogo, toptalLogo, xpoLogo],
    }
  },
}
</script>

<style lang="scss">
.grayscale {
  -webkit-filter: grayscale(100%); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(100%);
}
</style>
