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
