import {
  IElement, 
  ListItem,
  List,
  Element
} from '@root/elements';

import { insertSpans } from '@utils/spans';

export default {
  asText(structuredText: any[]): string {
    return structuredText.reduce<string>((acc: string, block: any): string => {
      return `${acc} ${block.text}`;
    }, '');
  },

  asHtml(
    structuredText: any[],
    linkResolver: (doc: any, isBroken: boolean) => string,
    htmlSerializer: (element: HTMLElement, content: string) => string
  ) {

    const elements = structuredText.reduce<Array<any>>((acc: IElement[], current: any): IElement[] => {
      const content = insertSpans(current.text, current.spans, linkResolver, htmlSerializer);
      const block = Element.apply(current, content, linkResolver);
      const tail = acc.length > 0 ? acc[acc.length -1] : null;

      if(tail instanceof List && block instanceof ListItem && tail.organized === block.organized) {
        const list = new List(tail.value.concat(block), block.organized);
        return acc.slice(0, acc.length - 1).concat([list])
      
      } else if(block instanceof ListItem) {
          return acc.concat([new List([block], block.organized)]);
      
      } else {
        return acc.concat([block]);
      }
    }, []);

    const serialized = elements.map((e: IElement) => e.serialize(htmlSerializer));
    return serialized.join('');

  }
}
