<template>
  <div class="container" v-if="!this.subs.business || !this.subs.subscribers">
    <p>...Loading</p>
  </div>
  <div class="container" v-else>
  <nav class="nav-bar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav">
      <router-link class='nav-item nav-link' to='/'>Home</router-link>
      <router-link class='nav-item nav-link' :to="'/'+this.$route.params.business_id+'/newSub'">Subscribe to {{this.subs.business.name}}</router-link>
    </ul>
  </nav>
  <div class="row row-header">
    <h5>{{this.subs.business.name}}'s list of Subscribers</h5>
  </div>
  <div class='subClass'>
      <table class="table subTable">
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody v-for="sub in this.subs.subscribers">
          <tr>
            <td >{{sub.status}}</td>
            <td >{{sub.name}}</td>
            <td >{{sub.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'CurrentBusiness',
  data () {
    return {
      subs: [],
    }
  },
  methods: {

  },
  mounted(){
    axios.get('https://young-temple-44207.herokuapp.com/businesses/'+this.$route.params.business_id+'/subscribers/?token=935602515')
    .then(res => this.subs = res.data)

  }


}

</script>

<style>
  .row-header {
    margin: 1%;
  }

  .subclass {
    width: 100%;
    height: 100%;
  }

  .subTable {
    width: 85%;
    height: 85%;
    text-align: center;
  }

  .subTable th {
    width: 25%;
  }

  .subTable td {
    width: 13%;
    font-size: 10pt;
  }

</style>
