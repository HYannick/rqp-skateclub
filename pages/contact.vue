<template lang="pug">
  .container
    .contact
      .contact-information
        h1.text-xxl(v-text="$prismic.asText(contact.title)")
        .contact-address
          h4.text-l.text-bold(v-text="$prismic.asText(contact.addressTitle)")
          p(v-html="$prismic.asHtml(contact.address)")
          p(v-html="$prismic.asHtml(contact.email)")
        .contact-social
          p.text-bold(v-text="$prismic.asHtml(contact.socialTitle)")
          ul.contact-social-links
              li(v-for="socialLink in $store.state.menu.sociallinks" :key="socialLink.id")
                prismic-link(:field="socialLink.link" target="_blank")
                  svg-icon.social__logo(:name="`social/${$prismic.asText(socialLink.name)}`")
      .contact-picture
        img(:src="contact.picture.url")
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "ContactPage",
  async asyncData({ $prismic, _, error }) {
    const {data: contact} = await $prismic.api.getByUID('contact-page', 'contact')
    if (document) {
      return { contact }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
})
</script>

<style lang="scss">
.contact {
  display: flex;
  margin: 5rem 0 10rem;
  @media screen and (max-width: $screen-size-sm) {
    flex-direction: column;
  }
  &-logo {
    margin: 3rem 0;
  }
  &-address {
    margin: 3rem 0;
    h4 {
      color: $color-primary;
      margin: 0 0 2rem;
    }
    > p {
      margin: 0 0 1rem;
      * {
        margin: 0;
      }
      &:last-child {
        margin-top: 2rem;
      }
    }
  }
  &-information {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 0.8;
    text-align: right;
    margin-right: 6rem;
    @media screen and (max-width: $screen-size-sm) {
      text-align: center;
      align-items: center;
      margin: 0;
    }
    h1 {
      color: $color-primary;
      margin: 0;
    }
  }
  &-picture {
    flex: 1;
    height: 70rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-social-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: $screen-size-sm) {
      justify-content: center;
    }
    li {
      list-style: none;
      margin-left: 3rem;
      a {
        display: block;
      }
      .social__logo {
        width: 3rem;
        height: 3rem;
        transition: fill 0.3s;
        &:hover {
          fill: $color-primary;
        }
      }
    }
  }
}
</style>
