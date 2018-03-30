<template>
  <div class="nav-list">
    <ul class="list-inline">
      <li><h1>List of Subscribers</h1></li>
      <li><router-link :to="'/'+this.$route.params.business_id+'/newSub'">Create Subscription</router-link></li>
    </ul>

    <div class='subClass' v-for="sub in this.subs.subscribers">
      <table>
        <tr>
          <th>status</th>
          <th>bus_id</th>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
        <tbody>
          <tr>
          <td>{{sub.status}}</td>
          <td>{{sub.name}}</td>
          <td>{{sub.id}}</td>
          <td>{{sub.business_id}}</td>
          <td>{{sub.email}}</td>
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

  },

}

</script>

<style lang="css">
</style>
