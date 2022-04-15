<template lang="pug">
  .video-block
    h4.text-xl(v-text="$prismic.asText(slice.primary.title)" )
    EmbedVideoVue(:url="slice.primary.video.embed_url")
</template>

<script>

import {EmbedVideoVue} from "~/components/common/embed-video";
export default {
  name: "VideoBlock",
  components: {EmbedVideoVue},
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped lang="scss">
.video-block {
  text-align: center;
  margin: 20rem auto;
  @media screen and (max-width: $screen-size-sm) {
    margin: 5rem 0;
  }
  > div {
    margin: 0 auto;
    overflow: hidden;
    border-radius: 2rem;
  }
  h4 {
    font-family: $rqp-default-heading-font-family;
    font-weight: lighter;
    margin: 0 0 4rem;
    @media screen and (max-width: $screen-size-sm) {
      margin: 0 0 2rem;
    }
  }
}

</style>
