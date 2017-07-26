import PrismicRichText, {Elements} from 'prismic-richtext';
import { Link as LinkHelper } from 'prismic-helpers';

function serialize(linkResolver, type, element, content, children) {
  switch(type) {
    case Elements.heading1: return serializeStandardTag('h1', element, content, children);
    case Elements.heading2: return serializeStandardTag('h2', element, content, children);
    case Elements.heading3: return serializeStandardTag('h3', element, content, children);
    case Elements.heading4: return serializeStandardTag('h4', element, content, children);
    case Elements.heading5: return serializeStandardTag('h5', element, content, children);
    case Elements.heading6: return serializeStandardTag('h6', element, content, children);
    case Elements.paragraph: return serializeStandardTag('p', element, content, children);
    case Elements.preformatted: return serializeStandardTag('pre', element, content, children);
    case Elements.strong: return serializeStandardTag('strong', element, content, children);
    case Elements.em: return serializeStandardTag('em', element, content, children);
    case Elements.listItem: return serializeStandardTag('li', element, content, children);
    case Elements.oListItem: return serializeStandardTag('li', element, content, children);
    case Elements.list: return serializeStandardTag('ul', element, content, children);
    case Elements.oList: return serializeStandardTag('ol', element, content, children);
    case Elements.image: return serializeImage(linkResolver, element);
    case Elements.embed: return serializeEmbed(element);
    case Elements.hyperlink: return serializeHyperlink(linkResolver, element, content, children);
    case Elements.label: return serializeLabel(element, content, children);
    case Elements.span: return serializeSpan(content);
    default: return '';
  }
}

function label(element) {
  return element.label ? ` class="${element.label}"` : '';
}
function serializeStandardTag(tag, element, content, children) {
  return `<${tag}${label(element)}>${children ? children.join('') : content}</${tag}>`;
}

function serializeImage(linkResolver, element) {
  const linkUrl = element.linkTo ? LinkHelper.url(element.linkTo, linkResolver) : null;
  const wrapperClassList = [element.label || '', 'block-img'];
  const img = `<img src="${element.url}" alt="${element.alt || ''}" copyright="${element.copyright || ''}">`;
  
  return (`
    <p class=${wrapperClassList.join(' ')}>
      ${linkUrl ? `<a href="${linkUrl}">${img}</a>` : img}
    </p>
  `);
}

function serializeEmbed(element) {
  return (`
    <div data-oembed="${element.embed_url}"
      data-oembed-type="${element.type}"
      data-oembed-provider="${element.provider_name}
      ${label(element)}>
          
      ${element.oembed.html}
    </div>
  `);
}

function serializeHyperlink(linkResolver, element, content, children) {
  return `<a href="${LinkHelper.url(element.data, linkResolver)}">${children ? children.join('') : content}</a>`
}

function serializeLabel(element, content, children) {
  return `<span ${label(element.data)}>${children ? children.join('') : content}</span>`;
}

function serializeSpan(content) {
  return content;
}

export default {
  asText(structuredText) {
    return structuredText.reduce((acc, block) => {
      return `${acc} ${block.text}`;
    }, '');
  },

  asHtml(richText, linkResolver, htmlSerializer) {
    const serialized = PrismicRichText.serialize(richText, serialize.bind(null, linkResolver), htmlSerializer);
    return serialized.join('');
  }
}
