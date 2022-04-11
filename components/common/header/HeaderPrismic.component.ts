import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';

@Component
export default class HeaderPrismicComponent extends Vue {
  mobileMenuOpen = false;

  openMenu() {
    this.mobileMenuOpen = true;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }
}
