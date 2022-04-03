import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';

@Component
export default class FooterPrismic extends Vue {

  footerData: any = {}

  async fetch() {
    // @ts-ignore
    this.footerData = (await this.$prismic.api.getSingle('menu')).data
  }

  get currentYear() {
    return new Date().getFullYear();
  }

  openPrivacyPolicyModal() {
    console.log('::opening privacy policy::')
  }
}
