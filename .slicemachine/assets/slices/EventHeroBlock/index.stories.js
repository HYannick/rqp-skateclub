import MyComponent from '../../../../slices/EventHeroBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/EventHeroBlock'
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
      mock: {"variation":"default","name":"Default","slice_type":"event_hero_block","items":[],"primary":{"title":[{"type":"heading1","text":"Empower seamless eyeballs","spans":[]}],"description":[{"type":"paragraph","text":"Duis aute do non commodo commodo elit Lorem aute officia sint culpa id eiusmod. Elit eiusmod culpa sunt amet quis culpa fugiat labore commodo tempor fugiat anim. Et aliqua do est veniam eu nostrud velit aliqua consectetur pariatur.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
