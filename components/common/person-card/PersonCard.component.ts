import { Component, Prop } from 'nuxt-property-decorator';
import Vue from 'vue';
import { PersonData } from '~/domain/Person';
import { CardSide } from '~/components/common/person-card/Enums';

@Component
export default class PersonCardComponent extends Vue {
  @Prop()
  person!: PersonData;

  @Prop({
    default: CardSide.LEFT
  })
  side!: CardSide;

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
    }
  }

  get brushImage() {
    return `brushes/brush-content-${this.side}`;
  }
}
