import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CurrentBusiness from '@/components/CurrentBusiness'
import NewSub from '@/components/NewSub'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/:business_id',
      name: 'CurrentBusiness',
      component: CurrentBusiness
    },
    {
      path: '/:business_id/newSub',
      name: 'NewSub',
      component: NewSub
    },

    {
      path:'/redirect', redirect:'/:business_id'
    }
  ]
})
