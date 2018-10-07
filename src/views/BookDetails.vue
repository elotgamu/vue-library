<template>
  <section id="book-details">
    <div class="container" v-if="book">
      <div class="row">
        <div class="col-md-12">
          <h3>{{ book.title}}</h3>
          <p class="text-align-left">{{ book.description }}</p>

          <p> <i class="fa fa-user"></i> Autor(es): </p>
          <ul class="list-unstyled">
            <li class="list-inline" v-for="(author, index) in book.authors" :key="index"> {{author.first_name }} {{ author.last_name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  name: 'book-details',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  mounted () {
    // do something after mounting vue instance
    this.getBookDetails()
  },
  data: () => ({
    message: '',
    book: null
  }),
  methods: {
    getBookDetails () {
      let vm = this
      let url = process.env.VUE_APP_ROOT_API + 'books/' + this.id
      axios.get(url)
        .then(function (response) {
          // Getting Data from response
          if (response.status === 200) {
            vm.book = response.data
          }
        })
        .catch(function (error) {
          alert(error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
