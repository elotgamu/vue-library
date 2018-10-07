<template>
  <section id="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4 offset-lg-4">
            <h1 class="text-center login-title">Inicio de Sesión</h1>
            <div class="account-wall">
                <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                    alt="">
                <form class="form-signin">
                  <input type="text" class="form-control" placeholder="Usuario" v-model="username" required autofocus>
                  <input type="password" class="form-control" placeholder="Contraseña" v-model="password" required>
                  <input :disabled="!can_click" type="button" class="btn btn-lg btn-info btn-block" v-on:click="login()" value="Iniciar Sesión">
                  <label class="checkbox pull-left remember-me">
                    <input type="checkbox" value="remember-me">
                    Remember me
                </label>
                <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
                </form>
            </div>
            <a href="#" class="text-center new-account">Create an account </a>
        </div>
    </div>
  </div>
  </section>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'login',
  data: () => ({
    message: '',
    // credentials: {
    //   username: null,
    //   password: null
    // },
    username: null,
    password: null
  }),
  computed: {
    can_click () {
      if (this.username && this.password) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    // auth_user () {
    //   let vm = this
    //   let LoginUrl = process.env.VUE_APP_ROOT_API + 'api-token/'
    //   let data = JSON.stringify(vm.credentials)
    //   let headers = {
    //     'Content-Type': 'application/json'
    //   }
    //   axios.post(LoginUrl, data, {
    //     headers: headers
    //   })
    //     .then(function (response) {
    //       // Getting data from response
    //       if (response.status === 200) {
    //         vm.token = response.data
    //         vm.$router.push({ name: 'books' })
    //       }
    //     })
    //     .catch(function (error) {
    //       // Describe error!
    //       alert(error)
    //     })
    // },
    login () {
      let username = this.username
      let password = this.password
      this.$store.dispatch('login', { username, password })
        .then(() => {
          this.$router.push({ name: 'books' })
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.form-signin
{
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
.form-signin .form-signin-heading, .form-signin .checkbox
{
    margin-bottom: 10px;
}
.form-signin .checkbox
{
    font-weight: normal;
}
.form-signin .form-control
{
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.form-signin .form-control:focus
{
    z-index: 2;
}
.form-signin input[type="text"]
{
    margin-bottom: -1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.form-signin input[type="password"]
{
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.account-wall
{
    margin-top: 20px;
    padding: 40px 0px 20px 0px;
    background-color: #f7f7f7;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    // border-radius: 25px;
}
.login-title
{
    color: #555;
    font-size: 18px;
    font-weight: 400;
    display: block;
}
.profile-img
{
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
.need-help, .remember-me
{
    margin-top: 10px;
}
.new-account
{
    display: block;
    margin-top: 10px;
}
</style>
