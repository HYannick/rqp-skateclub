import MyComponent from '../../../../slices/IntroductionText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/IntroductionText'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"introduction_text","items":[],"primary":{"introduction":[{"type":"paragraph","text":"Velit voluptate exercitation commodo duis excepteur mollit eiusmod in aute aute labore quis.","spans":[]}],"introductionDetails":[{"type":"paragraph","text":"Veniam occaecat proident aute sit amet fugiat elit esse elit minim.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
