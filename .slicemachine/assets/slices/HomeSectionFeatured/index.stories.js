import MyComponent from '../../../../slices/HomeSectionFeatured';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeSectionFeatured'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_section_featured","items":[],"primary":{"title":[{"type":"paragraph","text":"Sunt et culpa Lorem eiusmod cillum nisi irure ea qui. Excepteur occaecat eiusmod consectetur dolore elit esse nisi amet qui culpa veniam reprehenderit minim.","spans":[]}],"subTitle":[{"type":"paragraph","text":"Enim culpa non adipisicing ea velit Lorem laborum dolor do ipsum sunt culpa enim pariatur.","spans":[]}],"description":[{"type":"paragraph","text":"Ea elit proident eu elit commodo aute anim commodo adipisicing magna et officia eiusmod. Dolore esse mollit consectetur cillum esse cupidatat fugiat Lorem laboris excepteur consequat enim.","spans":[]}],"leftImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"},"rightImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"viewMore":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
