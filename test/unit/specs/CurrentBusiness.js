import vue from 'vue'
import CurrentBusiness from '@/components/CurrentBusiness'
import HelloWorld from '@/components/HelloWorld'
describe('CurrentBusiness.vue', () => {
  it('should render correct subscriptions', () => {
    expect(this.$route.params.business_id)
      .to.equal({{bus.id}})
  })
})
