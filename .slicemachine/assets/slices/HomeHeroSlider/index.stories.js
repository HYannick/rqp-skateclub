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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_hero_slider","items":[{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"}},{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"}},{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"}},{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Deliver wireless infrastructures","spans":[]}],"startAt":4719},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _SliderWithTitles = () => ({
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
      mock: {"variation":"sliderWithTitles","name":"Slider - With Titles","slice_type":"home_hero_slider","items":[{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"In Lorem non ea duis reprehenderit dolore commodo nostrud eu cillum dolor. Sint et laboris labore nulla labore sunt ea consectetur.","spans":[]}]},{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Nulla Lorem commodo laborum duis non fugiat culpa. Ipsum commodo pariatur occaecat sit ad officia. Non labore veniam nisi qui pariatur.","spans":[]}]},{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Adipisicing dolor quis laborum duis et elit. Qui ea in ullamco.","spans":[]}]},{"slideImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Esse proident excepteur velit tempor ea sunt aute magna consectetur pariatur duis do. Sint eu proident consectetur magna ad cupidatat est do velit mollit ipsum veniam nostrud.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Harness wireless convergence","spans":[]}],"description":[{"type":"paragraph","text":"Id deserunt eiusmod ipsum qui. Adipisicing dolor nisi ea anim ex enim eiusmod in velit pariatur pariatur. Eu tempor nulla consequat.","spans":[]}],"startAt":1940},"id":"_SliderWithTitles"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_SliderWithTitles.storyName = 'Slider - With Titles'
