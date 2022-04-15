import { Component, Prop } from 'nuxt-property-decorator';
import Vue from 'vue';
import { PersonData } from '~/domain/Person';
import { CardSide, CardVariant } from '~/components/common/person-card/Enums';

@Component
export default class PersonCardComponent extends Vue {
  @Prop()
  person!: PersonData;

  @Prop({
    default: CardSide.LEFT
  })
  side!: CardSide;

  @Prop({
    default: CardVariant.FULL,
  })
  variant!: string;

  @Prop()
  bigTitle!: string;

  @Prop({
    default: 'dark'
  })
  theme!: 'light' | 'dark';

  get classes() {
    return {
      '-reverse': this.side === CardSide.RIGHT,
      '-light': this.theme === 'light',
      '-simple': this.variant === CardVariant.SIMPLE
    }
  }

  get showDescription() {
    return this.variant === CardVariant.FULL;
  }
}
