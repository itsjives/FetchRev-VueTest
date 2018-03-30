import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    businesses: [],
  },
  getters: {

  },
  mutations: {
    setBusinessState(state, args){
      state.businesses = args
      console.log(state.businesses)
    }
  },
  actions: {
    getAllBusinesses(context){
      axios.get('https://young-temple-44207.herokuapp.com/businesses/?token=935602515')
        .then(res => context.commit('setBusinessState', res.data))
    }
  }
})
