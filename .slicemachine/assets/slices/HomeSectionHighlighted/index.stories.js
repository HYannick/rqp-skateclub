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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_section_highlighted","items":[],"primary":{"title":[{"type":"paragraph","text":"Commodo aliquip pariatur do ex do occaecat occaecat aliquip proident eu ullamco ipsum. Do Lorem tempor nulla anim.","spans":[]}],"subTitle":[{"type":"heading3","text":"Incentivize revolutionary e-tailers","spans":[]}],"description":[{"type":"paragraph","text":"Eu Lorem cupidatat ex irure Lorem irure Lorem nisi ex nisi nisi. Irure enim id incididunt ut adipisicing ea et. Esse sunt excepteur adipisicing irure velit enim aute commodo aute aliqua laborum veniam veniam.","spans":[]}],"viewMore":{"link_type":"Web","url":"http://google.com"},"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
