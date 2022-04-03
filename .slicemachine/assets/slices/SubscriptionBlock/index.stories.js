import MyComponent from '../../../../slices/SubscriptionBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SubscriptionBlock'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"subscription_block","items":[],"primary":{"title":[{"type":"heading1","text":"Architect open-source ROI","spans":[]}],"description":[{"type":"paragraph","text":"Amet laboris eiusmod enim fugiat tempor ut adipisicing minim aliquip qui pariatur eu. Fugiat et adipisicing laborum veniam commodo ex.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"},"picture":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
