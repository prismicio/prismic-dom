function htmlEscape(input) {
  return input && input.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}

/**
 * Parses a block that has spans, and inserts the proper HTML code.
 *
 * @param {string} text - the original text of the block
 * @param {object} spans - the spans as returned by the API
 * @param {object} linkResolver - the function to build links that may be in the fragment (please read prismic.io's online documentation about this)
 * @param {function} htmlSerializer - optional serializer
 * @returns {string} - the HTML output
 */
function insertSpans(text, spans, linkResolver, htmlSerializer) {
  if (!spans || !spans.length) {
    return htmlEscape(text);
  }

  var tagsStart = {};
  var tagsEnd = {};

  spans.forEach(function (span) {
    if (!tagsStart[span.start]) { tagsStart[span.start] = []; }
    if (!tagsEnd[span.end]) { tagsEnd[span.end] = []; }

    tagsStart[span.start].push(span);
    tagsEnd[span.end].unshift(span);
  });

  var c;
  var html = "";
  var stack = [];
  for (var pos = 0, len = text.length + 1; pos < len; pos++) { // Looping to length + 1 to catch closing tags
    if (tagsEnd[pos]) {
      tagsEnd[pos].forEach(function () {
        // Close a tag
        var tag = stack.pop();
        // Continue only if block contains content.
        if (typeof tag !== 'undefined') {
          var innerHtml = serialize(tag.span, tag.text, htmlSerializer);
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
      tagsStart[pos].sort(function (a, b) {
        return (b.end - b.start) - (a.end - a.start);
      });
      tagsStart[pos].forEach(function (span) {
        // Open a tag
        var url = null;
        if (span.type == "hyperlink") {
          var fragment = initField(span.data);
          if (fragment) {
            url = fragment.url(linkResolver);
          } else {
            if (console && console.error) console.error('Impossible to convert span.data as a Fragment', span);
            return;
          }
          span.url = url;
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

module.exports = {
  /**
   * Turns the fragment into a useable HTML version of it.
   * If the native HTML code doesn't suit your design, this function is meant to be overriden.
   * @params {array} structuredText - structured text fragment from prismic api
   * @params {function} linkResolver - please read prismic.io online documentation about link resolvers
   * @params {function} htmlSerializer optional HTML serializer to customize the output
   * @returns {string} - basic HTML code for the fragment
   */
  asHtml: function(structuredText, linkResolver, htmlSerializer) {
    var blockGroups = [],
        blockGroup,
        block,
        html = [];
    if (!isFunction(linkResolver)) {
      // Backward compatibility with the old ctx argument
      var ctx = linkResolver;
      linkResolver = function(doc, isBroken) {
        return ctx.linkResolver(ctx, doc, isBroken);
      };
    }
    if (Array.isArray(structuredText.blocks)) {

      for(var i=0; i < structuredText.blocks.length; i++) {
        block = structuredText.blocks[i];

        // Resolve image links
        if (block.type == "image" && block.linkTo) {
          var link = initField(block.linkTo);
          block.linkUrl = link.url(linkResolver);
        }

        if (block.type !== "list-item" && block.type !== "o-list-item") {
          // it's not a type that groups
          blockGroups.push(block);
          blockGroup = null;
        } else if (!blockGroup || blockGroup.type != ("group-" + block.type)) {
          // it's a new type or no BlockGroup was set so far
          blockGroup = {
            type: "group-" + block.type,
            blocks: [block]
          };
          blockGroups.push(blockGroup);
        } else {
          // it's the same type as before, no touching blockGroup
          blockGroup.blocks.push(block);
        }
      }

      var blockContent = function(block) {
        var content = "";
        if (block.blocks) {
          block.blocks.forEach(function (block2) {
            content = content + serialize(block2, blockContent(block2), htmlSerializer);
          });
        } else {
          content = insertSpans(block.text, block.spans, linkResolver, htmlSerializer);
        }
        return content;
      };

      blockGroups.forEach(function (blockGroup) {
        html.push(serialize(blockGroup, blockContent(blockGroup), htmlSerializer));
      });

    }

    return html.join('');

  },

  /**
   * Turns the fragment into a useable text version of it.
   * @params {array} structuredText - structured text fragment from prismic api
   * @returns {string} - basic text version of the fragment
   */
  asText: function(structuredText) {
    var output = [];
    for(var i=0; i<structuredText.blocks.length; i++) {
      var block = structuredText.blocks[i];
      if (block.text) {
        output.push(block.text);
      }
    }
    return output.join(' ');
  }
}