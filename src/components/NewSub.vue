<template>
  <div class="container">
    <nav class="navbar-nav">
    <router-link class="nav-item nav-link" to="/">Home</router-link>
    </nav>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 submitheader">
        <h1>Join us today</h1>
        <div class="form-group">
          <label for="name">Name</label>
          <input
          type="text"
          id="name"
          name="name"
          class="form-control"
          v-model="name"/>
        </div>
        <div class="form-group">
          <label for="Email">Email</label>
          <input
          type="text"
          id="email"
          name="email"
          class="form-control"
          v-model="email"/>
        </div>
        <div class="form-group">
          <button
          class="btn btn-dark btn-block"
          v-on:click.prevent="onSubmit">Subscribe!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NewSub',
  data () {
    return {
        name: '',
        email: ''
    }
  },
  methods: {
    onSubmit(){
      let name = this.name
      let email = this.email
      console.log(name)
      console.log(email)
      axios.post('https://young-temple-44207.herokuapp.com/businesses/'+this.$route.params.business_id+'/subscribers/?token=935602515&subscriber[name]='+ name +'&subscriber[email]='+ email)
        .then(res => {
          console.log(res)
          this.$router.push('/'+this.$route.params.business_id)
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
}
</script>
<style>

  .submitheader {
    text-align: center;
    margin-top: 10%;
  }
</style>
