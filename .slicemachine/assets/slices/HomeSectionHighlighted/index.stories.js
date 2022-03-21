import MyComponent from '../../../../slices/HomeSectionHighlighted';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeSectionHighlighted'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_section_highlighted","items":[],"primary":{"title":[{"type":"paragraph","text":"Ea fugiat sunt sunt labore ipsum in sint aliquip sit aliquip ex amet amet ex dolor. Non minim officia ad ex esse enim ipsum laboris id deserunt aliquip culpa adipisicing enim aliqua.","spans":[]}],"subTitle":[{"type":"heading3","text":"Unleash bleeding-edge interfaces","spans":[]}],"description":[{"type":"paragraph","text":"Et culpa non nisi dolore occaecat dolore nulla nisi officia sint aute minim enim officia.","spans":[]}],"viewMore":{"link_type":"Web","url":"https://prismic.io"},"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
