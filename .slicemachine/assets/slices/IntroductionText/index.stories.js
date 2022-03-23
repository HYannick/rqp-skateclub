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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"introduction_text","items":[],"primary":{"introduction":[{"type":"paragraph","text":"Pariatur reprehenderit proident laborum consequat pariatur dolor ipsum velit. Do tempor labore magna sint officia tempor id sint. Fugiat esse tempor occaecat commodo amet voluptate eu laboris elit cupidatat.","spans":[]}],"introductionDetails":[{"type":"paragraph","text":"Amet esse aliquip esse non qui. Id consectetur esse dolore. Aute veniam deserunt eu.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
