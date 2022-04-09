import { Component, Prop } from 'nuxt-property-decorator';
import Vue from 'vue';
import VueYouTubeEmbed, { getIdFromURL } from 'vue-youtube-embed';

Vue.use(VueYouTubeEmbed)

@Component
export default class EmbedVideoComponent extends Vue {
  @Prop()
  url!: string;

  get videoId() {
    return getIdFromURL(this.url)
  }
}
