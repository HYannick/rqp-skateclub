import MyComponent from '../../../../slices/BigHighlightBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BigHighlightBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"big_highlight_block","items":[],"primary":{"title":[{"type":"paragraph","text":"Velit incididunt amet ex aliquip ipsum ipsum nisi labore.","spans":[]}],"description":[{"type":"paragraph","text":"Consequat in reprehenderit adipisicing ea sit ad. Mollit qui consequat id quis nulla sunt ullamco magna sit ex commodo. Magna cillum ad et sit irure commodo laboris dolore excepteur deserunt nulla cillum.","spans":[]}],"featuredImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
