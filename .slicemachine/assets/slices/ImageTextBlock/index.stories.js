import MyComponent from '../../../../slices/ImageTextBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageTextBlock'
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
      mock: {"variation":"default","name":"Default","slice_type":"image_text_block","items":[],"primary":{"title":[{"type":"heading1","text":"Disintermediate viral users","spans":[]}],"description":[{"type":"paragraph","text":"Lorem fugiat id duis reprehenderit voluptate cupidatat amet consectetur duis ipsum velit cupidatat irure.","spans":[]}],"picture":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
