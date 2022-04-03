import { PersonData } from '~/domain/Person';

export const mockPersonData = (opts?: Partial<PersonData>): PersonData => ({
  index: 0,
  picture: {
    alt: 'picture-alt',
    url: 'ortega.jpg',
  },
  information: {
    name: 'Kristin Ortega',
    description: 'lorem ipsum',
  },
  socials: {
    facebook: 'facebook.com',
    instagram: 'instagram.com',
    youtube: 'youtube.com',
  },
  ...opts,
})
