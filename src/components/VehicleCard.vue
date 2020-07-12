<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.25,
    }"
    class="mx-auto"
    max-width="300"
    transition="fade-transition"
  >
    <v-card
      max-height="415"
      min-height="300"
      max-width="300"
      min-width="300"
      outlined
      hover
      :href="vehicle.url"
      :loading="!isActive"
    >
      <v-img
        max-height="200"
        max-width="300"
        min-width="275"
        :src="vehicle.image"
      >
      </v-img>

      <v-card-title>
        <v-row align="center" class="mx-0 d-block text-truncate">
          {{ vehicle.year + ' ' + vehicle.make + ' ' + vehicle.model }}
        </v-row>
      </v-card-title>
      <v-card-subtitle class="text-subtitle-1 pb-1">
        <v-row align="center" class="mx-0">
          {{
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(vehicle.price.toFixed(2))
          }}
        </v-row>
      </v-card-subtitle>
      <v-divider class="mx-3" />
      <v-card-text class="pt-2">
        <div>
          <v-icon size="14">mdi-counter</v-icon>
          &ensp;
          {{
            new Intl.NumberFormat('en-US', {
              style: 'unit',
              unit: 'mile',
              useGrouping: true,
            }).format(vehicle.mileage)
          }}
        </div>
        <div>
          <v-icon size="14">mdi-map-marker</v-icon>
          &ensp;
          {{ vehicle.city + ', ' + vehicle.state }}
        </div>
        <div>
          <v-icon size="14">mdi-car-key</v-icon>
          &ensp;
          {{ vehicle.condition }}
        </div>
      </v-card-text>
    </v-card>
  </v-lazy>
</template>

<script>
export default {
  name: 'VehicleCard',
  props: {
    vehicle: Object,
  },
  data() {
    return {
      isActive: false,
    }
  },
  computed: {},
}
</script>

<style lang="scss" scoped></style>
