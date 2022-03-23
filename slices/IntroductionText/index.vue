<template lang="pug">
  .container
    .introduction.text-center
      p.text.text-semi-light.-colored-span.-bold-span(v-html='$prismic.asHtml(slice.primary.introduction)')
      .introduction-details(v-if="hasIntroductionDetails" )
        p.text.text-semi-light.-colored-span.-bold-span(v-html='$prismic.asHtml(slice.primary.introductionDetails)')
</template>

<script lang="ts">
import { Component, Prop } from 'nuxt-property-decorator';
import Vue from 'vue';

@Component
export default class IntroductionText extends Vue {
  @Prop({
    default: () => {}
  })
  slice!: any;

  get hasIntroductionDetails() {
    return this.slice.primary.introductionDetails[0].text;
  }
}
</script>

<style scoped lang="scss">
.introduction {
  margin: 5rem auto 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    max-width: 100rem;
    width: 100%;
    font-size: 2.5rem;
  }
  span {
    font-weight: bold;
    color: $color-primary;
  }
  &-details {
    margin-top: 3rem;
    p {
      max-width: 130rem;
      width: 100%;
      font-size: 1.8rem;
      text-align: justify;
    }
  }
}
</style>
