export interface RestPerson {
  picture: {
    alt: string;
    url: string;
  },
  name: any;
  description: any;
  facebook: any;
  instagram: any;
  youtube: any;
}

export interface PersonData {
  index: number;
  picture: {
    alt: string;
    url: string;
  },
  information: {
    name: string;
    description: string;
  },
  socials: {
    facebook: any;
    instagram: any;
    youtube: any;
  }
}
