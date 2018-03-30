<template>
  <div class="containerfirst">
    <div class="logo">
      <h4>FetchRev</h4>
      <h5>companies and subscribers</h5>
    </div>
    <div class="row home-row">
      <div class="header">
        <p>Please select a company to view its subscribers</p>
      </div>
      <div class="col-md-6 col-div">
        <div class='business' v-for="bus in this.businesses.businesses">
          <router-link class="link-text" :to="'/' + bus.id ">{{bus.name}}</router-link>
        </div>
      </div>
    </div>
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
<style lang="css">

  .home-row {
    margin-top: 3%;
  }

  .header {
    margin: 0 auto;
    width: 45%;
    height: 10%;
    text-align: center;
    display: inline-block;
    font-family: helvetica;
    font-size: 14pt;

  }

  .col-div{
    margin: 0 auto;
    display: inline-block;
    position: relative;
    text-align: center;
    font-size: 16pt;
    margin-bottom: 10%;
    margin-left: 25%;
    padding: 2%;
    font-family: fantasy;
  }

  .containerfirst {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .containerfirst:before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.25;
    top: 0px;
    left: 0px;
    z-index: -1;
    background-image: url("../assets/image.jpg");
    background-position: center;
    background-repeat: no-repeat;

  }

  .business .link-text {
    display: block;
    color: black;
    height: auto;
    text-align: center;
    margin: 2%;
    text-decoration: underline;

  }

  .logo ,h4{
    margin: 0 auto;
    display: block;
    font-family: Chalkduster;
    margin-top: 4%;
    font-size: 26pt;
    text-align: center;
    width: 50%;
    height: 40%;
  }

  .logo, h5 {
    margin-top: 4%;

  }

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
