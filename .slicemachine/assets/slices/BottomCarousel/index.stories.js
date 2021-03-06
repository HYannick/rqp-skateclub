import MyComponent from '../../../../slices/BottomCarousel';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BottomCarousel'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"bottom_carousel","items":[{"picture":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"heading":[{"type":"paragraph","text":"Ipsum voluptate ut occaecat. Excepteur commodo enim esse ex cupidatat exercitation tempor ex.","spans":[]}],"text":[{"type":"paragraph","text":"Fugiat ea aliquip commodo ullamco pariatur ipsum commodo elit Lorem commodo exercitation laborum. Aliquip ullamco deserunt esse. Duis culpa ut irure dolore culpa Lorem ad ea.","spans":[]}]},{"picture":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"heading":[{"type":"paragraph","text":"Dolor sint ullamco et do. Ex qui Lorem ullamco officia in.","spans":[]}],"text":[{"type":"paragraph","text":"Pariatur tempor laborum eu pariatur nulla anim veniam laboris dolore cupidatat ut id ut magna. Amet et sit Lorem non quis pariatur dolor esse.","spans":[]}]},{"picture":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"},"heading":[{"type":"paragraph","text":"Culpa est labore velit deserunt culpa.","spans":[]}],"text":[{"type":"paragraph","text":"Ad esse consequat magna consectetur consequat aliquip.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Integrate 24/7 paradigms","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
