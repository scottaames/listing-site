import InventoryService from '@/services/InventoryService.js'

export const state = () => ({
  inventory: [],
  vehicle: {},
  vehicles: [],
})
export const mutations = {
  SET_INVENTORY(state, inventory) {
    state.inventory = inventory
  },
  SET_VEHICLE(state, vehicle) {
    state.vehicle = vehicle
  },
  SET_VEHICLES(state, vehicles) {
    state.vehicles = vehicles
  },
}
export const actions = {
  fetchInventory({ commit }) {
    return InventoryService.getInventory().then(response => {
      commit('SET_INVENTORY', response.data)
    })
  },
  fetchVehicle({ commit }, id) {
    return InventoryService.getVehicle(id).then(response => {
      commit('SET_VEHICLE', response.data)
    })
  },
  fetchNRandomVehicles({ commit }, n) {
    return InventoryService.getNRandomVehicles(n).then(response => {
      commit('SET_VEHICLES', response.data)
      console.log(response)
    })
  },
}
