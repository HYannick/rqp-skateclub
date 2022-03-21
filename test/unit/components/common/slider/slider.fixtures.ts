import { Slide } from '~/components/common/Types';

export const createSlide = (opts?: Partial<Slide>): Slide => ({
  index: 1,
  headline: 'Crook Nollie Flip',
  src: 'crook-nollie-flip.jpg',
  ...opts,
})
