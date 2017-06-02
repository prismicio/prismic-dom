import {
  Element
} from '@root/elements';

import Link from '@root/link';

function htmlEscape(input: string) {
  return input && input.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}

export enum TagType {

}

export function insertSpans(text: string, spans: any, linkResolver: (doc: any, isBroken: boolean) => string, htmlSerializer: (element: HTMLElement, content: string) => string): string {
  if (!spans || !spans.length) {
    return htmlEscape(text);
  }

  var tagsStart: any = {};
  var tagsEnd: any = {};

  spans.forEach(function (span: any) {
    if (!tagsStart[span.start]) { tagsStart[span.start] = []; }
    if (!tagsEnd[span.end]) { tagsEnd[span.end] = []; }

    tagsStart[span.start].push(span);
    tagsEnd[span.end].unshift(span);
  });

  var c;
  var html = "";
  var stack: any = [];
  for (var pos = 0, len = text.length + 1; pos < len; pos++) { // Looping to length + 1 to catch closing tags
    if (tagsEnd[pos]) {
      tagsEnd[pos].forEach(function () {
        // Close a tag
        var tag = stack.pop();
        // Continue only if block contains content.
        if (typeof tag !== 'undefined') {
          const typedTag = Element.apply(tag.span, tag.text, linkResolver);
          var innerHtml = typedTag.serialize(htmlSerializer);
          if (stack.length === 0) {
            // The tag was top level
            html += innerHtml;
          } else {
            // Add the content to the parent tag
            stack[stack.length - 1].text += innerHtml;
          }
        }
      });
    }
    if (tagsStart[pos]) {
      // Sort bigger tags first to ensure the right tag hierarchy
      tagsStart[pos].sort(function (a: any, b: any) {
        return (b.end - b.start) - (a.end - a.start);
      });
      tagsStart[pos].forEach(function (span: any) {
        // Open a tag
        var url = null;
        if (span.type == "hyperlink") {
          span.url = Link.url(span.data, linkResolver);
        }
        var elt = {
          span: span,
          text: ""
        };
        stack.push(elt);
      });
    }
    if (pos < text.length) {
      c = text[pos];
      if (stack.length === 0) {
        // Top-level text
        html += htmlEscape(c);
      } else {
        // Inner text of a span
        stack[stack.length - 1].text += htmlEscape(c);
      }
    }
  }

  return html;
}
