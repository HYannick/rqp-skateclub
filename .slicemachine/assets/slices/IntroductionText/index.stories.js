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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"introduction_text","items":[],"primary":{"introduction":[{"type":"paragraph","text":"Eu nostrud quis in ipsum tempor eiusmod anim enim aliqua eiusmod ea fugiat fugiat qui. Excepteur consectetur reprehenderit tempor fugiat Lorem irure est.","spans":[]}],"introductionDetails":[{"type":"paragraph","text":"Officia nulla voluptate ut dolore tempor Lorem Lorem Lorem mollit et sunt amet ipsum ex quis. Incididunt esse duis officia qui mollit nulla nostrud consequat consequat duis in non ex sit minim.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
