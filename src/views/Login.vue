<template>
  <v-container
    fluid
    :style="{
      background:
        'linear-gradient(217deg, #0673A9, #4DB6EA) 71.25%, linear-gradient(127deg, #06222F, #023D5A) 71.25%, linear-gradient(336deg, #8CD3F6, #E3F6FF) 71.25%',
    }"
    class="fill-height"
  >
    <v-card min-width="400" max-width="500">
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>Login</span>
      </v-card-title>
      <v-form ref="login" class="text-center">
        <v-card-text>
          <v-text-field label="Email" v-model="email"></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
          ></v-text-field>
          <router-link to="goTo(register)" class="blue--text text--darken-4">
            Don't have an account? Sign up
          </router-link>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="justify-end">
          <v-btn type="submit" color="primary" depressed @click="loginUser">
            Submit
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    loginUser() {},
  },
}
</script>

<style lang="scss" scoped></style>
