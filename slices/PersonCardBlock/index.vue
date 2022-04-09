<template lang="pug">
  section.section
    .container
      h2.title-2.text-size-xxl.-colored-span(v-html='$prismic.asHtml(slice.primary.title)')
      template(v-if='slice.variation === "asTeachersList"')
        .flex.-space-between.flex-1
          PersonCardVue(v-for="(person, i) in persons" :person='person' :side='cardReversed(i)' :key="person.id" variant="simple")
      template(v-else)
        PersonCardVue(:person='persons[0]' :bigTitle="$prismic.asHtml(slice.primary.presidentHeading)")
        .section-with-brush
          .bg-brush
            svg-icon(name='brushes/backgroundish')
          PersonCardVue(:person='persons[1]' side="right" theme="light" :bigTitle="$prismic.asHtml(slice.primary.secretariatHeading)")
          PersonCardVue(:person='persons[2]' theme="light")
        PersonCardVue(:person='persons[3]' side="right" :bigTitle="$prismic.asHtml(slice.primary.cashflowHeading)")
        PersonCardVue(:person='persons[4]' :bigTitle="$prismic.asHtml(slice.primary.itGuy)")
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';
import { PersonCardVue } from '~/components/common/person-card';
import { PersonData, RestPerson } from '~/domain/Person';
import { CardSide } from '~/components/common/person-card/Enums';

@Component({
  components: {
    PersonCardVue,
  },
})
export default class PersonCardBlock extends Vue {
  @Prop()
  slice!: any;

  get persons(): PersonData[] {
    return this.slice.items.map((person: RestPerson, index: number): PersonData => {
      return ({
        index,
        picture: person.picture,
        information: {
          name: this.$prismic.asHtml(person.name),
          description: this.$prismic.asHtml(person.description),
        },
        socials: {
          facebook: person.facebook,
          instagram: person.instagram,
          youtube: person.youtube
        }
      })
    })
  }

  cardReversed(index: number) {
    return index % 2 === 0 ? CardSide.LEFT : CardSide.RIGHT
  }
}
</script>

<style scoped lang="scss">
  .section-with-brush {
    margin: 20rem 0 50rem;
    position: relative;
  }
  .bg-brush {
    width: 100%;
    height: 80rem;
    transform: scale(3.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    svg {
      width: 100%;
      height: 100%;
    }
  }
</style>
