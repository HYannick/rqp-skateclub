import MyComponent from '../../../../slices/PersonCardBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PersonCardBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"person_card_block","items":[{"picture":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"name":[{"type":"paragraph","text":"Dolore ut laboris occaecat mollit excepteur eiusmod ut excepteur voluptate laborum incididunt nostrud. Quis tempor id id ad quis dolor occaecat excepteur duis adipisicing eu do enim.","spans":[]}],"description":[{"type":"paragraph","text":"Mollit consectetur exercitation commodo. Id non duis anim commodo et proident.","spans":[]}],"facebook":{"link_type":"Web","url":"https://slicemachine.dev"},"instagram":{"link_type":"Web","url":"https://slicemachine.dev"},"youtube":{"link_type":"Web","url":"https://slicemachine.dev"}},{"picture":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"},"name":[{"type":"paragraph","text":"Non dolore consectetur tempor aute adipisicing excepteur cillum consectetur duis sit nulla Lorem aliquip consequat. Aliqua minim Lorem mollit mollit veniam ad duis laborum. Esse anim fugiat excepteur sunt culpa Lorem excepteur magna nostrud culpa tempor aliqua labore.","spans":[]}],"description":[{"type":"paragraph","text":"Laborum et non ullamco esse eiusmod amet tempor non aliqua nostrud consequat ea est aliqua. Voluptate sit ut aliqua occaecat eu et anim elit officia proident minim in. Id deserunt laborum voluptate tempor ut pariatur ad eiusmod pariatur voluptate mollit cupidatat dolor eiusmod.","spans":[]}],"facebook":{"link_type":"Web","url":"https://prismic.io"},"instagram":{"link_type":"Web","url":"http://google.com"},"youtube":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":[{"type":"heading1","text":"Mesh vertical supply-chains","spans":[]}],"presidentHeading":[{"type":"paragraph","text":"Eu laborum exercitation elit est elit aliqua voluptate consequat cupidatat. Id occaecat nulla enim deserunt ex adipisicing nisi amet culpa ipsum. In velit ea Lorem tempor.","spans":[]}],"secretariatHeading":[{"type":"paragraph","text":"Anim incididunt labore eiusmod sint esse pariatur excepteur nisi laboris culpa pariatur tempor do anim commodo. Deserunt do magna quis consequat mollit aliquip laboris consequat proident. Magna adipisicing tempor anim veniam tempor ex voluptate commodo amet ex do eu do amet.","spans":[]}],"cashflowHeading":[{"type":"paragraph","text":"Nostrud tempor enim aliquip deserunt excepteur sint. Sit minim voluptate laboris reprehenderit in laboris fugiat consectetur ipsum culpa.","spans":[]}],"itGuy":[{"type":"paragraph","text":"Lorem consequat cupidatat nostrud nulla labore qui in id Lorem reprehenderit est nisi pariatur ipsum laboris.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _AsTeachersList = () => ({
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
      mock: {"variation":"asTeachersList","name":"asTeachersList","slice_type":"person_card_block","items":[{"picture":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"name":[{"type":"paragraph","text":"Excepteur consequat do incididunt tempor irure deserunt nulla ad officia enim irure tempor irure aliqua consequat.","spans":[]}],"description":[{"type":"paragraph","text":"Nostrud do ut sunt exercitation duis eu sit elit aliquip eu tempor velit officia. Cupidatat duis ut mollit ut deserunt nulla consectetur irure.","spans":[]}],"facebook":{"link_type":"Web","url":"https://prismic.io"},"instagram":{"link_type":"Web","url":"https://prismic.io"},"youtube":{"link_type":"Web","url":"https://slicemachine.dev"}},{"picture":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"name":[{"type":"paragraph","text":"Non pariatur consequat duis tempor aute cupidatat eiusmod excepteur ipsum nisi qui est aliqua voluptate. Nostrud eiusmod commodo occaecat magna esse incididunt fugiat dolore labore Lorem non pariatur culpa eiusmod.","spans":[]}],"description":[{"type":"paragraph","text":"Ex ea ut eu exercitation exercitation ut non labore nisi in culpa. Laboris incididunt excepteur Lorem incididunt veniam.","spans":[]}],"facebook":{"link_type":"Web","url":"https://prismic.io"},"instagram":{"link_type":"Web","url":"https://prismic.io"},"youtube":{"link_type":"Web","url":"https://prismic.io"}},{"picture":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"name":[{"type":"paragraph","text":"Tempor aute elit officia cupidatat cillum incididunt quis cupidatat consectetur reprehenderit ex commodo. Fugiat enim cillum laboris cillum incididunt sint minim ut do esse do deserunt.","spans":[]}],"description":[{"type":"paragraph","text":"Qui pariatur eiusmod non cillum consequat consectetur proident do deserunt ad amet do ut.","spans":[]}],"facebook":{"link_type":"Web","url":"http://twitter.com"},"instagram":{"link_type":"Web","url":"http://twitter.com"},"youtube":{"link_type":"Web","url":"https://prismic.io"}},{"picture":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"name":[{"type":"paragraph","text":"Quis mollit anim proident aute laborum ipsum mollit occaecat non ad. Duis labore aliquip id Lorem non duis eiusmod magna duis sunt esse commodo cillum nostrud cillum.","spans":[]}],"description":[{"type":"paragraph","text":"Dolor anim ut ut sint laboris id fugiat aliqua eiusmod aliquip in amet.","spans":[]}],"facebook":{"link_type":"Web","url":"http://google.com"},"instagram":{"link_type":"Web","url":"http://twitter.com"},"youtube":{"link_type":"Web","url":"http://google.com"}}],"primary":{"title":[{"type":"heading1","text":"Visualize vertical functionalities","spans":[]}]},"id":"_AsTeachersList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_AsTeachersList.storyName = 'asTeachersList'
