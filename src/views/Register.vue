<template>
  <v-container
    fluid
    :style="{
      background:
        'linear-gradient(217deg, #0673A9, #4DB6EA) 71.25%, linear-gradient(127deg, #06222F, #023D5A) 71.25%, linear-gradient(336deg, #8CD3F6, #E3F6FF) 71.25%',
    }"
    class="fill-height align-content-center align-center justify-center"
  >
    <v-row justify="center" align="center" align-content="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-stepper
          :alt-labels="!this.$vuetify.breakpoint.mobile"
          v-model="step"
          style="max-width:750px;width:100%;"
          class="mx-auto pt-2"
        >
          <v-stepper-header background class="elevation-0">
            <template v-for="n in steps">
              <v-stepper-step
                color="teal accent-4"
                :key="`${n}-step`"
                :complete="step > n"
                :step="n"
                :editable="validEmail || (validPassword && step === 2)"
                complete-icon="mdi-party-popper"
              >
                <div class="text-center">{{ titles[n - 1] }}</div>
              </v-stepper-step>

              <v-divider v-if="n !== steps" :key="n"></v-divider>
            </template>
          </v-stepper-header>
          <v-alert
            class="pa-0 ma-0"
            color="red accent-2"
            icon="mdi-shield-alert"
            tile
            dense
            outlined
            type="warning"
            max-width="93.75%"
          >
            <v-row>
              <v-col>
                <span class="pb-1">
                  This website is for demonstration purposes and does not
                  protect user data.

                  <strong class="font-weight-black">
                    Do not use an email/password combination that is valid
                    elsewhere.
                  </strong></span
                >
                <template v-slot:prepend>
                  <div class="px-2 my-0">
                    <v-icon class="pa-0 red--text text--accent-2"
                      >mdi-shield-alert</v-icon
                    >
                  </div>
                </template>
                <template v-slot:default> </template>
                <template v-slot:append>
                  <v-sheet color="transparent" width="100%" outlined>
                    <v-icon class="pr-2 outlined red--text text--accent-2"
                      >mdi-shield-alert</v-icon
                    >
                  </v-sheet>
                </template>
              </v-col>
            </v-row>
          </v-alert>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-container fluid>
                <v-row justify="center">
                  <v-col cols="10">
                    <v-form
                      ref="emailForm"
                      class="text-wrap"
                      v-model="validEmail"
                    >
                      <v-text-field
                        height="200"
                        class="mx-5 text-wrap"
                        ref="emailInput"
                        label="Email Address"
                        v-model="email"
                        style="max-height:100%"
                        :hide-details="false"
                        :rules="getEmailRules()"
                        :success="validEmail"
                        prepend-icon="mdi-email-outline"
                        :append-icon="validEmail ? 'mdi-check' : ''"
                        loading
                      >
                        <template v-slot:progress>
                          <v-progress-linear
                            :value="progress"
                            :color="color"
                            absolute
                            height="5"
                          ></v-progress-linear>
                        </template>
                      </v-text-field>
                      <span>
                        This will the username you need to login moving forward
                      </span>
                    </v-form>
                  </v-col>
                </v-row>
                <v-divider class="my-4" />
                <v-row justify="space-between">
                  <div class="align-self-start">
                    <v-btn disabled text @click="step--">
                      Back
                    </v-btn>
                  </div>
                  <div class="align-self-center">
                    <router-link
                      class="text-headline text-decoration-none"
                      to="/login"
                    >
                      Already have an account? Login
                    </router-link>
                  </div>
                  <div class="align-content-end float-right mr-1">
                    <v-btn
                      color="grey lighten-3"
                      v-if="step == 1 || step == 2"
                      @click="reset"
                      depressed
                      class="mr-1"
                    >
                      Reset
                    </v-btn>
                    <v-btn
                      :disabled="!validEmail || (step === 2 && !validPassword)"
                      color="primary"
                      depressed
                      @click="nextStep(step)"
                    >
                      Next
                    </v-btn>
                  </div>
                </v-row>
              </v-container>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-container fluid>
                <v-row justify="center" align="stretch">
                  <v-col cols="10">
                    <v-form
                      ref="passwordForm"
                      v-model="validPassword"
                      :disabled="!validEmail || step == 3"
                    >
                      <v-text-field
                        :success="validPassword"
                        v-model="password"
                        ref="password"
                        label="Enter your new password"
                        :rules="getPasswordRules()"
                        :prepend-icon="validPassword ? 'mdi-check' : ''"
                        :counter="maxLength"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        :type="showPassword ? 'text' : 'password'"
                      ></v-text-field>
                      <v-text-field
                        :success="validPasswordConfirmation"
                        ref="passwordConfirmation"
                        :rules="getPasswordConfirmationRules"
                        :prepend-icon="
                          validPasswordConfirmation ? 'mdi-check' : ''
                        "
                        v-model="passwordConfirmation"
                        label="Confirm Password"
                        :type="showPassword ? 'text' : 'password'"
                      ></v-text-field>
                    </v-form>
                    <span class="caption grey--text text--darken-1">
                      Please enter a password for your account
                    </span>
                  </v-col>
                </v-row>
                <v-divider class="my-4" />
                <v-row justify="space-between">
                  <div class="align-self-start">
                    <v-btn text @click="step--">
                      Back
                    </v-btn>
                  </div>

                  <div class="align-content-end float-right mr-1">
                    <v-btn
                      color="grey lighten-3"
                      @click="reset"
                      depressed
                      class="mr-1"
                    >
                      Reset
                    </v-btn>
                    <v-btn
                      :disabled="!validEmail || (step === 2 && !validPassword)"
                      color="primary"
                      depressed
                      @click="nextStep(step)"
                    >
                      Next
                    </v-btn>
                  </div>
                </v-row>
              </v-container>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-container class="text-center">
                <v-img
                  class="mb-4"
                  contain
                  height="128"
                  src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                ></v-img>
                <h3 class="title font-weight-light mb-2">
                  Welcome to Listing-Site
                </h3>
                <span class="caption grey--text">Thanks for signing up!</span>
                <h2 class="subtitle">Ready find your next ride?</h2>
                <v-btn to="/home/#explore">Explore our inventory</v-btn>
              </v-container>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      step: 1,
      steps: 3,
      titles: ['Enter email', 'Choose password', 'Account created'],
      validEmail: false,
      validPassword: false,
      validPasswordConfirmation: false,
      showPassword: false,
      email: '',
      password: '',
      passwordConfirmation: '',
      maxLength: 30,
      minLength: 8,

      rules: {
        email: null,
        password: null,
        passwordConfirmation: null,
      },
    }
  },
  computed: {
    getPasswordConfirmationRules() {
      return [
        v =>
          (!!v && v) === this.password ||
          'Password and password confirmation values do not match',
      ]
    },
    progress() {
      return this.validEmail ? 100 : Math.min(100, this.email.length * 7.5)
    },
    color() {
      return this.validEmail
        ? 'success'
        : ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
    },
  },
  methods: {
    getEmailRules() {
      return [
        v => !!v || 'A valid email address is required to sign up',
        v => /.+@.+\..+/.test(v) || 'The email address provided is not valid',
      ]
    },
    getPasswordRules() {
      return [
        v => !!v || 'A password is required to sign up',
        v =>
          (v || '').length >= this.minLength ||
          `Password must be greater than ${this.minLength} in length`,
        v =>
          (v || '').length <= this.maxLength ||
          `Password must be less than ${this.maxLength} characters in length`,
        v =>
          (v || '').indexOf(' ') < 0 ||
          'No spaces are permitted in the password field',
      ]
    },

    validateEmail() {
      this.validEmail = this.$refs.emailForm.validate()
    },
    validatePassword() {
      this.validPassword = this.$refs.passwordForm.validate()
    },

    nextStep(n) {
      if (n === this.steps) {
        this.step = 1
      } else {
        this.step = n + 1
      }
    },
    reset() {
      this.$refs.emailForm.reset()
      this.$refs.passwordForm.reset()
    },
  },
}
</script>

<style lang="scss"></style>
