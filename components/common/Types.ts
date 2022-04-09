export interface RestSlide {
  picture: {
    alt: string;
    url: string;
  },
  text: any;
  heading: any;
}

export interface SlideConfig {
  asText: boolean;
  index: number;
}

export interface Slide extends SlideConfig {
  headline?: string;
  alt: string;
  src: string;
}

export interface TextSlide extends SlideConfig {
  content: {
    heading: string;
    text: string;
  }
}

export interface RestSponsorImage {
  sponsorLogo: {
    alt: string;
    url: string;
  }
}

export interface SponsorImage {
  index: number;
  headline: string;
  src: string;
}

