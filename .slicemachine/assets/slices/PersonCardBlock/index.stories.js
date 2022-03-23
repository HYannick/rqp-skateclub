import MyComponent from '../../../../slices/PersonCardBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PersonCardBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"person_card_block","items":[],"primary":{"title":[{"type":"heading1","text":"Embrace transparent relationships","spans":[]}],"description":[{"type":"paragraph","text":"Labore eiusmod veniam adipisicing aute reprehenderit aliquip ex cillum et ullamco ea magna non aliquip non.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
