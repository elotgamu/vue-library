let mutations = {
  auth_request (state) {
    state.status = 'loading'
  },
  auth_success (state, data) {
    state.status = 'success'
    state.token = data.token
    state.user = data.user
  },
  auth_error (state) {
    state.status = 'error'
  },
  logout (state) {
    state.status = ''
    state.token = ''
  }
}

export default mutations
