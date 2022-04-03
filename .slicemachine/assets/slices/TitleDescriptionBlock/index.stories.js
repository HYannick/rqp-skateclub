import MyComponent from '../../../../slices/TitleDescriptionBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TitleDescriptionBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"title_description_block","items":[],"primary":{"title":[{"type":"paragraph","text":"Cupidatat ipsum consequat id.","spans":[]}],"description":[{"type":"paragraph","text":"Amet nostrud enim Lorem incididunt in officia Lorem velit quis officia non veniam non nisi. Aute velit nulla eiusmod sint sit do id sit occaecat in consequat cillum commodo ea laborum.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
