import axios from 'axios'

let actions = {
  /**
   * Login action
   * @param  {Action for mutation} commit [description]
   * @param  {Object} user   [description]
   * @return {[type]}        [description]
   */
  login ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')

      axios({

        url: process.env.VUE_APP_ROOT_API + 'api-token/',
        data: user,
        method: 'POST'

      }).then(response => {
        // Get the response and save the token from the API
        const token = response.data.token
        const user = response.data.user
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = token
        // commit('auth_success', token, userdata)
        commit('auth_success', { 'token': token, 'user': user })
        resolve(response)
      }).catch(error => {
        // If the API returns error remove the token
        commit('auth_error')
        localStorage.removeItem('token')
        reject(error)
      })
    })
  },
  /**
   * Logout a user, basically remove token from state
   * @param  {[type]} commit [description]
   * @return {[type]}        [description]
   */
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}

export default actions
