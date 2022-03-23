import { Slide, TextSlide } from '~/components/common/Types';

export const createSlide = (opts?: Partial<Slide | TextSlide>): Slide | TextSlide => ({
  index: 1,
  headline: 'Crook Nollie Flip',
  src: 'crook-nollie-flip.jpg',
  asText: false,
  ...opts,
})
