<template>
  <v-app v-scroll="onScroll">
    <!-- <v-navigation-drawer app v-model="drawer" temporary floating right>
    </v-navigation-drawer> -->
    <v-app-bar :color="bgColor" app :elevation="0">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title :style="{ color: this.textColor }" id="appbar-content"
        >Listing Website</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        v-if="this.$vuetify.breakpoint.mobile"
        :style="{ color: this.textColor }"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <div v-else>
        <v-btn
          :style="{ color: this.textColor }"
          id="appbar-content"
          to="#home"
          text
          active
          >Home</v-btn
        >
        <v-btn
          :style="{ color: this.textColor }"
          id="appbar-content"
          to="#explore"
          text
          >Explore</v-btn
        >
        <v-btn
          :style="{ color: this.textColor }"
          id="appbar-content"
          to="#tour"
          text
          class="mr-md-3 mr-sm-1"
          >Tour</v-btn
        >

        <v-btn to="/register" color="primary">
          Sign Up
        </v-btn>
        <v-btn class="ml-2" to="/login" color="grey lighten-5">
          Login
        </v-btn>
      </div>
    </v-app-bar>
    <v-main class="pa-0 ma-0">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      offsetTop: 0,
      bgColor: this.$store.state.appBar.bgColor,
      textColor: this.$store.state.appBar.textColor,
      drawer: null,
      drawerActive: false,
    }
  },
  watch: {
    $route: 'setColor',
  },
  created() {
    this.setColor()
  },
  methods: {
    onScroll(e) {
      let val = (e.target.querySelector('html').scrollTop - 75) / 100
      this.offsetTop = Number(parseFloat(val).toFixed(2))
      this.setColor()
    },
    setColor() {
      if (this.$route.path == '/register' || this.$route.path == '/login') {
        this.bgColor = `rgba(255, 255, 255, 1)`
        this.textColor = `rgba(0, 0, 0, 0.87)`
        return
      }
      let opacity = this.offsetTop <= 0 ? 0 : Math.min(this.offsetTop, 1)
      this.bgColor = `rgba(255, 255, 255, ` + opacity + `)`

      if (opacity > 0.5) {
        this.textColor = `rgba(0, 0, 0, 0.87)`
      } else {
        this.textColor = `rgba(255, 255, 255, 1)`
      }
    },
    setTextColor() {},
  },
}
</script>
<style lang="scss">
v-app {
  max-width: 100%;
}
</style>
