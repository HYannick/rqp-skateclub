export interface RestEvent {
  picture: {
    alt: string;
    url: string;
  },
  title: any;
  thumbnail: {
    alt: string;
    url: string;
  },
  shortDesc: any;
  date: string;
  link: any;
  slices: any[];
}


export class EventData {
  constructor(
    public readonly thumbnail: {
      alt: string;
      url: string;
    },
    public readonly title: string,
    public readonly description: string,
    public readonly date: Date,
    public readonly link: any,
    public readonly slices?: any[],
  ) {}

  static toDomain(restEvent: RestEvent, $prismic: any) {
    return new EventData(
      {
        alt: restEvent.thumbnail.alt,
        url: restEvent.thumbnail.url,
      },
      $prismic.asText(restEvent.title),
      $prismic.asText(restEvent.shortDesc),
      new Date(restEvent.date),
      restEvent.link,
      restEvent.slices,
    )
  }
}

export class toEventData {
}
