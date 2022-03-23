import { Element } from '@prismicio/helpers';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (type: any, element: any, content: string | null, children: string[]) {
  switch (type) {
    case Element.paragraph:
      return `${children.join('')}`;
    case Element.heading1:
      return `${children.join('')}`;
    case Element.heading2:
      return `${children.join('')}`;
    case Element.heading3:
      return `${children.join('')}`;
    case Element.heading4:
      return `${children.join('')}`;
    case Element.listItem:
      return `${children.join('')}`;
    case Element.list:
      return `${children.join('')}`;
    case Element.image:
      return`${children.join('')}`;
    default:
      return null;
  }
}
