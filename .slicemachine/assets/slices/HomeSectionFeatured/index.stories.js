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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_section_featured","items":[],"primary":{"title":[{"type":"paragraph","text":"Fugiat eu voluptate est elit Lorem fugiat veniam labore cillum. Laboris quis non deserunt id ad dolore proident. Deserunt tempor labore exercitation esse laborum aliqua nulla tempor aute anim et.","spans":[]}],"subTitle":[{"type":"paragraph","text":"Veniam enim culpa enim eiusmod Lorem consectetur dolor labore sit irure aliquip tempor mollit dolore culpa. Sit aliqua magna in exercitation adipisicing ipsum id minim eiusmod.","spans":[]}],"description":[{"type":"paragraph","text":"Minim mollit ut ad.","spans":[]}],"leftImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"rightImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"viewMore":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
