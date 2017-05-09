import { getURL } from '@utils/link';

export enum ElementKind {
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  paragraph,
  preformatted,
  strong,
  em,
  "list-item",
  "o-list-item",
  "group-list-item",
  "group-o-list-item",
  image,
  embed,
  hyperlink,
  label
};

export interface IElement {
  kind: ElementKind;
  value: any;
  content: string;
  serialize(htmlSerializer: (element: HTMLElement, content: string) => string | null): string;
}

export class Heading implements IElement {
  kind: ElementKind;
  value: any;
  level: number;
  content: string;

  constructor(value: any, level: number, content: string) {
    this.value = value;
    this.level = level;
    this.content = content;
    

    switch(level) {
      case 1: this.kind = ElementKind.heading1;
      case 2: this.kind = ElementKind.heading2;
      case 3: this.kind = ElementKind.heading3;
      case 4: this.kind = ElementKind.heading4;
      case 5: this.kind = ElementKind.heading5;
      case 6: this.kind = ElementKind.heading6;
      default: throw Error(`Invalid heading level ${level}`);
    };
  }

  serialize(htmlSerializer: (element: HTMLElement, content: string) => string): string {
    if(htmlSerializer) return htmlSerializer(this.value, this.content);
    const classList = [this.value.label || ''];
    return `<h${this.level} class="${classList.join(' ')}">${this.content}</h${this.level}>`;
  }
}

export class ListItem implements IElement {
  kind: ElementKind;
  value: any;
  organized: boolean;
  content: string;

  constructor(value: any, organized: boolean, content: string) {
    this.value = value;
    this.organized = organized;
    this.content = content;
  }

  serialize(htmlSerializer: (element: HTMLElement, content: string) => string): string {
    if(htmlSerializer) return htmlSerializer(this.value, this.content);
    const classList = [this.value.label || ''];
    return `<li class="${classList.join(' ')}">${this.content}</li>`;
  }
}

export class List implements IElement {
  kind: ElementKind;
  value: ListItem[];
  organized: boolean;
  content: string;

  constructor(value: ListItem[], organized: boolean) {
    this.organized = organized;
    this.value = value;
  }

  serialize(htmlSerializer: (element: HTMLElement, content: string) => string): string {
    return this.value.map(item => {
      if(htmlSerializer) return htmlSerializer(item.value, item.content);
      else return item .serialize(htmlSerializer);
    }).join('');
  }
}

export class Paragraph implements IElement {
  kind: ElementKind;
  value: any;
  content: string;

  constructor(value: any, content: string) {
    this.kind = ElementKind.paragraph;
    this.value = value;
    this.content = content;
  }

  serialize(htmlSerializer: (element: HTMLElement, content: string) => string): string {
    if(htmlSerializer) return htmlSerializer(this.value, this.content);
    const classList = [this.value.label || ''];
    return `<p class="${classList.join(' ')}">${this.content}</p>`;
  }
}

export class Preformatted implements IElement {
  kind: ElementKind;
  value: any;
  content: string;

  constructor(value: any, content: string) {
    this.kind = ElementKind.preformatted;
    this.value = value;
    this.content = content;
  }

  serialize(htmlSerializer: (element: HTMLElement, content: string) => string): string {
    if(htmlSerializer) return htmlSerializer(this.value, this.content);
    const classList = [this.value.label || ''];
    return `<pre class="${classList.join(' ')}">${this.content}</pre>`;
  }
}

export class Strong implements IElement {
  kind: ElementKind;
  value: any;
  content: string;

  constructor(value: any, content: string) {
    this.kind = ElementKind.strong;
    this.value = value;
    this.content = content;
  }

  serialize(htmlSerializer: (element: HTMLElement, content: string) => string): string {
    if(htmlSerializer) return htmlSerializer(this.value, this.content);
    const classList = [this.value.label || ''];
    return `<strong class="${classList.join(' ')}">${this.content}</strong>`;
  }
}

export class Emphasized implements IElement {
  kind: ElementKind;
  value: any;
  content: string;

  constructor(value: any, content: string) {
    this.kind = ElementKind.em;
    this.value = value;
    this.content = content;
  }

  serialize(htmlSerializer: (element: HTMLElement, content: string) => string): string {
    if(htmlSerializer) return htmlSerializer(this.value, this.content);
    const classList = [this.value.label || ''];
    return `<em class="${classList.join(' ')}">${this.content}</em>`;
  }
}

export class Image implements IElement {
  kind: ElementKind;
  url: string;
  value: any;
  content: string;

  constructor(value: any, content: string) {
    this.kind = ElementKind.image;
    this.value = value;
    this.url = this.value.image.url;
    this.content = content;
  }

  serialize(htmlSerializer: (element: HTMLElement, content: string) => string): string {
    if(htmlSerializer) return htmlSerializer(this.value, this.content);
    const wrapperClassList = [this.value.label || '', 'block-img'];
    const img = `<img src="${this.value.url}" alt="${this.value.alt || ''}" copyright="${this.value.copyright || ''}">`;
    return (`
      <p class=${wrapperClassList.join(' ')}>
        ${this.url ? `<a href="${this.url}">${img}</a>` : img}
      </p>
    `);
  }
}

export class Embed implements IElement {
  kind: ElementKind;
  value: any;
  content: string;

  constructor(value: any, content: string) {
    this.kind = ElementKind.embed;
    this.value = value;
    this.content = content;
  }

  serialize(htmlSerializer: (element: HTMLElement, content: string) => string): string {
    if(htmlSerializer) return htmlSerializer(this.value, this.content);
    const classList = [this.value.label || ''];
    return (
      `<div data-oembed="${this.value.embed_url}"
        data-oembed-type="${this.value.type}"
        data-oembed-provider="${this.value.provider_name}
        class="${classList.join(' ')}">
        
        ${this.value.oembed.html}
      </div>
    `);
  }
}

export class Link implements IElement {
  kind: ElementKind;
  value: any;
  content: string;
  url: string;

  constructor(value: any, linkResolver: (doc: any, isBroken: boolean) => string, content: string) {
    this.kind = ElementKind.hyperlink;
    this.value = value;
    this.content = content;
    this.url = getURL(value, linkResolver);
  }

  serialize(htmlSerializer: (element: HTMLElement, content: string) => string): string {
    if(htmlSerializer) return htmlSerializer(this.value, this.content);
    return `<a href="${this.url}">${this.content}</a>`;
  }
}

export class Label implements IElement {
  kind: ElementKind;
  value: any;
  content: string;

  constructor(value: any, content: string) {
    this.kind = ElementKind.label;
    this.value = value;
    this.content = content;
  }

  serialize(htmlSerializer: (element: HTMLElement, content: string) => string): string {
    if(htmlSerializer) return htmlSerializer(this.value, this.content);
    return `<span class="${this.value.data.label}">${this.content}</span>`;
  }
}

export const Element = {
  apply(element: any, content: string, linkResolver: (doc: any, isBroken: boolean) => string): IElement {
    switch(element.type) {
      case 'heading1': return new Heading(element, 1, content);
      case 'heading2': return new Heading(element, 2, content);
      case 'heading3': return new Heading(element, 3, content);
      case 'heading4': return new Heading(element, 4, content);
      case 'heading5': return new Heading(element, 5, content);
      case 'heading6': return new Heading(element, 6, content);
      case 'heading6': return new Heading(element, 6, content);
      case 'paragraph': return new Paragraph(element, content);
      case 'preformatted': return new Preformatted(element, content);
      case 'strong': return new Strong(element, content);
      case 'em': return new Emphasized(element, content);
      case 'list-item': return new ListItem(element, false, content);
      case 'o-list-item': return new ListItem(element, true, content);
      case 'image': return new Image(element, content);
      case 'embed': return new Embed(element, content);
      case 'hyperlink': return new Link(element, linkResolver, content);
      case 'label': return new Label(element, content);
      default: throw new Error(`Invalid element type on element : ${JSON.stringify(element)}`);
    }
  }
}
