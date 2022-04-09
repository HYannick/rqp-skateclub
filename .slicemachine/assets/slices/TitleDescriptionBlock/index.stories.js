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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"title_description_block","items":[],"primary":{"title":[{"type":"paragraph","text":"Et esse commodo sunt dolor esse sint et anim sit sit anim ut. Fugiat est pariatur do irure in pariatur incididunt sunt. Consectetur minim adipisicing amet do et non quis dolor.","spans":[]}],"description":[{"type":"paragraph","text":"Eu dolore adipisicing pariatur pariatur adipisicing. Labore cillum id dolor.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
