import PrismicRichText, { Elements } from "prismic-richtext";
import { Link as LinkHelper } from "prismic-helpers";
import escapeHtml from "escape-html";

function serialize(linkResolver, type, element, content, children) {
  switch (type) {
    case Elements.heading1:
      return serializeStandardTag("h1", element, children);
    case Elements.heading2:
      return serializeStandardTag("h2", element, children);
    case Elements.heading3:
      return serializeStandardTag("h3", element, children);
    case Elements.heading4:
      return serializeStandardTag("h4", element, children);
    case Elements.heading5:
      return serializeStandardTag("h5", element, children);
    case Elements.heading6:
      return serializeStandardTag("h6", element, children);
    case Elements.paragraph:
      return serializeStandardTag("p", element, children);
    case Elements.preformatted:
      return serializePreFormatted(element);
    case Elements.strong:
      return serializeStandardTag("strong", element, children);
    case Elements.em:
      return serializeStandardTag("em", element, children);
    case Elements.listItem:
      return serializeStandardTag("li", element, children);
    case Elements.oListItem:
      return serializeStandardTag("li", element, children);
    case Elements.list:
      return serializeStandardTag("ul", element, children);
    case Elements.oList:
      return serializeStandardTag("ol", element, children);
    case Elements.image:
      return serializeImage(linkResolver, element);
    case Elements.embed:
      return serializeEmbed(element);
    case Elements.hyperlink:
      return serializeHyperlink(linkResolver, element, children);
    case Elements.label:
      return serializeLabel(element, children);
    case Elements.span:
      return serializeSpan(content);
    default:
      return "";
  }
}

function label(element) {
  return element.label ? ` class="${element.label}"` : "";
}

function serializeStandardTag(tag, element, children) {
  return `<${tag}${label(element)}>${children.join("")}</${tag}>`;
}

function serializePreFormatted(element) {
  return `<pre${label(element)}>${escapeHtml(element.text)}</pre>`;
}

function serializeImage(linkResolver, element) {
  const linkUrl = element.linkTo
    ? LinkHelper.url(element.linkTo, linkResolver)
    : null;
  const linkTarget =
    element.linkTo && element.linkTo.target
      ? `target="${element.linkTo.target}" rel="noopener"`
      : "";
  const wrapperClassList = [element.label || "", "block-img"];
  const img = `<img src="${element.url}" alt="${element.alt ||
    ""}" copyright="${element.copyright || ""}">`;

  return `
    <p class="${wrapperClassList.join(" ")}">
      ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
    </p>
  `;
}

function serializeEmbed(element) {
  return `
    <div data-oembed="${element.oembed.embed_url}"
      data-oembed-type="${element.oembed.type}"
      data-oembed-provider="${element.oembed.provider_name}"
      ${label(element)}>

      ${element.oembed.html}
    </div>
  `;
}

function serializeHyperlink(linkResolver, element, children) {
  const target = element.data.target
    ? `target="${element.data.target}" rel="noopener"`
    : "";
  return `<a ${target} href="${LinkHelper.url(
    element.data,
    linkResolver
  )}">${children.join("")}</a>`;
}

function serializeLabel(element, children) {
  return `<span ${label(element.data)}>${children.join("")}</span>`;
}

function serializeSpan(content) {
  return content ? escapeHtml(content).replace(/\n/g, "<br />") : "";
}

function serializeMD(linkResolver, type, element, content, children) {
  switch (type) {
    case Elements.heading1:
      return serializeMDHeading("#", element, children);
    case Elements.heading2:
      return serializeMDHeading("##", element, children);
    case Elements.heading3:
      return serializeMDHeading("###", element, children);
    case Elements.heading4:
      return serializeMDHeading("####", element, children);
    case Elements.heading5:
      return serializeMDHeading("#####", element, children);
    case Elements.heading6:
      return serializeMDHeading("######", element, children);
    case Elements.paragraph:
      return serializeMDParagraph(element, children);
    case Elements.preformatted:
      return serializeMDPreFormatted(element);
    case Elements.strong:
      return serializeMDStrong(element, children);
    case Elements.em:
      return serializeMDEm(element, children);
    case Elements.listItem:
      return serializeMDUl(element, children);
    case Elements.oListItem:
      return serializeMDOl(element, children);
    case Elements.list:
      return serializeMDParagraph(element, children);
    case Elements.oList:
      return serializeMDParagraph(element, children);
    case Elements.image:
      return serializeMDImage(linkResolver, element);
    case Elements.hyperlink:
      return serializeMDHyperlink(linkResolver, element, children);
    case Elements.embed: // no MD support, fall back to plain html
      return serializeEmbed(element);
    case Elements.label: // no MD support, fall back to plain html
      return serializeMDSpan(element, children);
    case Elements.span:
      return serializeMDSpan(content);
    default:
      return "";
  }
}

function serializeMDHeading(heading, element, children) {
  return `${heading} ${children.join("")}\n\n`;
}

function serializeMDParagraph(element, children) {
  return `${children.join("")}\n\n`;
}

function serializeMDPreFormatted(element) {
  return `${"```"}\n${element.text}\n${"```"}\n\n`;
}

function serializeMDStrong(element, children) {
  return `**${children.join("")}**`;
}

function serializeMDEm(element, children) {
  return `_${children.join("")}_`;
}

function serializeMDUl(element, children) {
  return `- ${children.join("")}\n`;
}

function serializeMDOl(element, children) {
  return `0. ${children.join("")}\n`;
}

function serializeMDImage(linkResolver, element) {
  const linkUrl = element.linkTo
    ? LinkHelper.url(element.linkTo, linkResolver)
    : null;

  const img = `![${element.alt || ""}](${element.url} "${element.copyright}")`;
  return `${linkUrl ? `[${img}](${linkUrl})` : img}\n\n`;
}

function serializeMDHyperlink(linkResolver, element, children) {
  return `[${children.join("")}](${LinkHelper.url(
    element.data,
    linkResolver
  )})`;
}

function serializeMDSpan(content) {
  return content ? content.replace(/\n/g, "<br />") : "";
}

export default {
  asText(structuredText, joinString) {
    return PrismicRichText.asText(structuredText, joinString);
  },

  asHtml(richText, linkResolver, htmlSerializer) {
    const serialized = PrismicRichText.serialize(
      richText,
      serialize.bind(null, linkResolver),
      htmlSerializer
    );
    return serialized.join("");
  },

  asMarkdown(richText, linkResolver) {
    const serialized = PrismicRichText.serialize(
      richText,
      serializeMD.bind(null, linkResolver)
    );
    return serialized.join("");
  },

  Elements: Elements
};
