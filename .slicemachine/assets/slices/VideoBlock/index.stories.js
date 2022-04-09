import MyComponent from '../../../../slices/VideoBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/VideoBlock'
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
      mock: {"variation":"default","name":"Default","slice_type":"video_block","items":[],"primary":{"title":[{"type":"heading1","text":"Whiteboard viral schemas","spans":[]}],"video":{"url":"https://twitter.com/prismicio/status/1354112310252630016","author_name":"Prismic","author_url":"https://twitter.com/prismicio","html":"<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">We&#39;re launching a new <a href=\"https://twitter.com/hashtag/SliceContest?src=hash&amp;ref_src=twsrc%5Etfw\">#SliceContest</a> tomorrow along with Slice Machine upgrades.<br><br>Want to know more? Join us at tomorrow&#39;s Product Meet-up👇<a href=\"https://t.co/prYSypiAvB\">https://t.co/prYSypiAvB</a><br><br>We can&#39;t tell you any further details for now, but here&#39;s a sneak peek at the prizes👀 <a href=\"https://t.co/fV1eoGlEBh\">pic.twitter.com/fV1eoGlEBh</a></p>&mdash; Prismic (@prismicio) <a href=\"https://twitter.com/prismicio/status/1354112310252630016?ref_src=twsrc%5Etfw\">January 26, 2021</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n","width":550,"height":null,"type":"rich","cache_age":"3153600000","provider_name":"Twitter","provider_url":"http://www.twitter.com/","version":"1.0"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
