let getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status
}

export default getters
