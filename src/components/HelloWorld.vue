<template>
  <div class="hello">
    <div class='business' v-for="bus in this.businesses.businesses">
      <router-link :to="'/' + bus.id ">{{bus.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {

  },
  mounted() {
    this.$store.dispatch('getAllBusinesses')
  },
  computed: {
    businesses() {
      return this.$store.state.businesses
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
