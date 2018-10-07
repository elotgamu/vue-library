<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Acerca de</router-link> |
      <router-link to="/books">Libros</router-link> |
      <router-link :to="{ name: 'login'}" v-if="!isLoggedIn">Iniciar Sesión</router-link>
      <a v-if="isLoggedIn" v-on:click="logout()">Cerrar Sesión</a>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default ({
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'books' })
    }
  }
})

</script>

<style lang="scss">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
