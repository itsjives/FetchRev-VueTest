<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CurrentBusiness from './components/CurrentBusiness.vue'
import NewSub from './components/NewSub.vue'
import { PacmanLoader } from 'vue-spinner/dist/vue-spinner.min.js'
export default {
  name: 'App',
  components: {
    HelloWorld,
    CurrentBusiness,
    NewSub,
    PacmanLoader
  }
}
</script>
