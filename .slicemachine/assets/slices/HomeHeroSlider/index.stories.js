import MyComponent from '../../../../slices/HomeHeroSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeHeroSlider'
}


export const _DefaultSlice = () => ({
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_hero_slider","items":[{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"}},{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"}},{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"}},{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"}},{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Mesh bleeding-edge bandwidth","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
