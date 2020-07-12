<template>
  <v-container style="max-width: 1400px;">
    <v-row align="center" justify="center">
      <v-col cols="12" class="mt-3">
        <div class="text-h5 font-weight-bold text-center">
          Explore top listings in {{ city }}
        </div>
      </v-col>
      <v-col
        v-for="(vehicle, index) in vehicles"
        :key="index"
        :cols="columnSize"
      >
        <VehicleCard :vehicle="vehicle" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VehicleCard from '@/components/VehicleCard'
import InventoryService from '@/services/InventoryService.js'

export default {
  name: 'VehicleCardGroup',
  props: ['city'],
  components: {
    VehicleCard,
  },
  data() {
    return {
      vehicles: [],
      columnSize: this.getColumnSize(),
    }
  },
  created() {
    this.getVehicles()
  },
  computed: {},
  methods: {
    getVehicles() {
      InventoryService.getNVehiclesFromCity(
        this.city,
        12 / this.columnSize
      ).then(response => {
        this.vehicles = response.data
      })
      this.columnSize = this.getColumnSize()
    },
    getColumnSize() {
      switch (this.$vuetify.breakpoint.name) {
        default:
          return 12
        case 'sm':
          return 6
        case 'md':
          return 4
        case 'lg':
          return 3
        case 'xl':
          return 3
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
