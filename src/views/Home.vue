<template>
  <div>
    <v-parallax id="home" class="parallax pa-0 ma-0">
      <v-container class="pa-0 ma-0 d-flex align-self-center">
        <v-row align="center" justify="center" dense>
          <v-col class="text-center blurred" cols="12">
            <h1 class="shadowed font-weight-bold text-md-h2 text-h3 mb-8">
              Find the right truck for the job
            </h1>
            <h4 class="d-none d-sm-block shadowed my-4 text-h5">
              Browse dozens of top-rated manufacturers' eighteen-wheelers,
              trucks, trailers, and vans
            </h4>
          </v-col>
          <v-col align-self="center" cols="12">
            <v-row align="center" dense justify="center">
              <v-col lg="3" md="5" cols="10">
                <v-text-field
                  label="Make, model, manufacturer, etc."
                  solo
                  :prepend-inner-icon="mdiMagnifyIcon"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col md="auto" cols="10">
                <v-text-field
                  label="City, State, or Zip"
                  solo
                  :prepend-inner-icon="mdiMapMarkerIcon"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col md="auto" sm="12" cols="10">
                <v-row
                  no-gutters
                  align="center"
                  align-content="center"
                  justify="center"
                  style="height: 50px;"
                  class="blurred mx-lg-2"
                >
                  <v-checkbox
                    dark
                    v-model="selectedConditions"
                    value="New"
                    color="info"
                    class="mr-2"
                  >
                    <template v-slot:label>
                      <div class="white--text text-body-1 font-weight-medium">
                        New
                      </div>
                    </template>
                  </v-checkbox>
                  <v-checkbox
                    dark
                    v-model="selectedConditions"
                    color="info"
                    class="ml-2"
                    value="Used"
                  >
                    <template v-slot:label>
                      <div class="white--text text-body-1 font-weight-medium">
                        Used
                      </div>
                    </template>
                  </v-checkbox>
                </v-row>
              </v-col>

              <v-col cols="auto">
                <v-btn
                  medium
                  color="success"
                  class="elevation-8 font-weight-bold"
                  >Search</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-footer absolute class="d-none d-sm-flex my-3" color="transparent">
          <v-row justify="center" align="center" no-gutters>
            <h6 class="text-h6 white--text text-decoration-underline pr-5">
              Quick Search:
            </h6>

            <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              text
              rounded
              class="text-h6 text-none"
            >
              {{ link }}
            </v-btn>
          </v-row>
        </v-footer>
      </v-container>
    </v-parallax>
    <Testimonials />
    <div id="explore" class="banner mb-6">
      <v-row no-gutters class="fill-height" justify="center" align="center">
        <h1 class="text-h6 font-weight-regular mr-5">
          Need help finding your next vehicle?
        </h1>

        <v-btn large color="success" class="text-none ml-5 text-heading-6"
          >Chat with an expert</v-btn
        >
      </v-row>
    </div>

    <VehicleCardGroup city="Los Angeles" />
    <VehicleCardGroup city="New York City" />
    <VehicleCardGroup city="Seattle" />
  </div>
</template>

<script>
import {
  mdiMagnify,
  mdiMapMarker,
  mdiTruckFast,
  mdiFormatListBulleted,
} from '@mdi/js'
import Testimonials from '@/components/TestimonialsBanner'
import VehicleCardGroup from '@/components/VehicleCardGroup'

export default {
  name: 'Home',
  components: {
    Testimonials,
    VehicleCardGroup,
  },

  data() {
    return {
      mdiMagnifyIcon: mdiMagnify,
      mdiMapMarkerIcon: mdiMapMarker,
      mdiTruckFastIcon: mdiTruckFast,
      mdiFormatListBulletedIcon: mdiFormatListBulleted,
      links: [
        'Los Angeles',
        'San Francisco',
        'Portland',
        'Seattle',
        'Austin',
        'New York City',
      ],
      conditions: [
        'New',
        'Used (Private)',
        'Used (Dealer)',
        'Certified Pre-Owned',
      ],
      selectedConditions: [],
      types: [
        "Van (0-10')",
        "Van (10'+)",
        'Truck (2WD)',
        'Truck (4WD)',
        "Truck (0-16')",
        "Truck (16'+)",
        '18-wheeler',
      ],
      selectedTypes: [],
    }
  },
  computed: {
    selectedAllTypes() {
      return this.selectedTypes.length === this.types.length
    },
    selectedSomeTypes() {
      return this.selectedTypes.length > 0 && !this.selectedAllTypes
    },
    selectedAllConditions() {
      return this.selectedConditions.length === this.conditions.length
    },
    selectedSomeConditions() {
      return this.selectedConditions.length > 0 && !this.selectedAllConditions
    },
    iconTypes() {
      if (this.selectedAllTypes) return 'mdi-close-box'
      if (this.selectedSomeTypes) return 'mdi-plus-box'
      return 'mdi-checkbox-blank-outline'
    },
    iconConditions() {
      if (this.selectedAllConditions) return 'mdi-close-box'
      if (this.selectedSomeConditions) return 'mdi-plus-box'
      return 'mdi-checkbox-blank-outline'
    },
  },
  methods: {
    toggleTypes() {
      this.$nextTick(() => {
        if (this.selectedAllTypes) {
          this.selectedTypes = []
        } else {
          this.selectedTypes = this.types.slice()
        }
      })
    },
    toggleConditions() {
      this.$nextTick(() => {
        if (this.selectedAllConditions) {
          this.selectedConditions = []
        } else {
          this.selectedConditions = this.conditions.slice()
        }
      })
    },
  },
}
</script>

<style lang="scss"></style>
