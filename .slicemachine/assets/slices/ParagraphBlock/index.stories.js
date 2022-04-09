import MyComponent from '../../../../slices/ParagraphBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ParagraphBlock'
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
      mock: {"variation":"default","name":"Default","slice_type":"paragraph_block","items":[],"primary":{"text":[{"type":"paragraph","text":"Pariatur qui ea occaecat ex anim enim pariatur voluptate.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
