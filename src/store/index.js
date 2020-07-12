import Vue from 'vue'
import Vuex from 'vuex'
import InventoryService from '@/services/InventoryService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    appBar: {
      bgColor: `rgba(255, 255, 255, 1)`,
      textColor: `rgba(0, 0, 0, 0.87)`,
    },
    inventory: [],
    vehicle: {},
    vehicles: [],
  }),
  mutations: {
    SET_INVENTORY(state, inventory) {
      state.inventory = inventory
    },
    SET_VEHICLE(state, vehicle) {
      state.vehicle = vehicle
    },
    SET_VEHICLES(state, vehicles) {
      state.vehicles = vehicles
    },
    SET_APP_BAR_COLORS(state, colors) {
      state.colors = colors
    },
  },

  actions: {
    fetchInventory({ commit }) {
      return InventoryService.getInventory()
        .then(response => {
          commit('SET_INVENTORY', response.data)
        })
        .catch(error => {
          console.log('ERROR: ', error.response)
        })
    },
    fetchVehicle({ commit }, id) {
      return InventoryService.getVehicle(id)
        .then(response => {
          commit('SET_VEHICLE', response.data)
        })
        .catch(error => {
          console.log('ERROR: ', error.response)
        })
    },
    fetchNRandomVehicles({ commit }, n) {
      let vehiclesObj = []
      return InventoryService.getNRandomVehicles(n)
        .then(async response => {
          await response.forEach(results => {
            vehiclesObj.push(results.data)
          })
          commit('SET_VEHICLES', vehiclesObj)
        })
        .catch(error => {
          console.log('ERROR: ', error.response)
        })
    },
  },
  modules: {},
})
