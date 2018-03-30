<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CurrentBusiness from './components/CurrentBusiness.vue'
import NewSub from './components/NewSub.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    CurrentBusiness,
    NewSub
  }
}
</script>
