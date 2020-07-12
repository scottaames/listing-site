import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'applicaton/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getInventory() {
    return apiClient.get('/inventory')
  },
  getVehicle(id) {
    return apiClient.get('/inventory/' + id)
  },
  getNRandomVehicles(n) {
    let promises = []
    for (let i = 1; i < n; i++) {
      promises.push(
        apiClient.get('/inventory/' + Math.floor(Math.random() * 999))
      )
    }
    return Promise.all(promises)
  },
  getNVehiclesFromCity(name, n) {
    return apiClient.get(
      '/inventory?city=' + encodeURIComponent(name) + '&_limit=' + n
    )
  },
}
