import { expect } from 'chai';
import RichText from '../src/richtext.js';
const asText = RichText.asText;
const asHtml = RichText.asHtml;

const mock = [
  { type: 'paragraph', text: 'A > B', spans: [] },
  { type: 'preformatted', text: '<example>\n  TEST\n</example>', spans: [] },
  {
    "type": "paragraph",
    "text": "This is bold and italic and >:) both.",
    "spans": [
      {
        "start": 8,
        "end": 12,
        "type": "strong"
      },
      {
        "start": 17,
        "end": 23,
        "type": "em"
      },
      {
        "start": 28,
        "end": 36,
        "type": "strong"
      },
      {
        "start": 28,
        "end": 36,
        "type": "em"
      }
    ]
  },
  {
    "type": "paragraph",
    "text": "This is a link with XSS.",
    "spans": [{
      "start": 10,
      "end": 14,
      "type": "hyperlink",
      "data": {
        "link_type": "Web",
        "url": "https://example.org\" onmouseover=\"alert(document.cookie);"
      }
    }]
  },
  {
    "type": "paragraph",
    "text": "This is a normal link.",
    "spans": [{
      "start": 17,
      "end": 21,
      "type": "hyperlink",
      "data": {
        "link_type": "Web",
        "url": "https://prismic.io"
      }
    }]
  },
  {
		"type": "image",
		"url": "https://images.prismic.io/200629-sms-hoy/f0a757f6-770d-4eb8-a08b-f1727f1a58e4_guilherme-romano-KI2KaOeT670-unsplash.jpg?auto=compress,format",
		"alt": "An \"Atlantic\" Puffin",
		"copyright": "\"unsplash\"",
		"dimensions": {
			"width": 2400,
			"height": 1602
		}
	}
];

describe('asText', function() {
  context('applying mock object using default join string (undefined)', function() {
    const result = asText(mock);

    // Note: Currently there is '\n ' added to the output.
    // See: https://github.com/prismicio/prismic-richtext/issues/7
    // Until pull request https://github.com/prismicio/prismic-richtext/pull/8
    // is released, we test for the old behaviour.
    it('should join blocks with one whitespace (default)', function()  {
      expect(result).to.equal('A > B <example>\n  TEST\n</example> This is bold and italic and >:) both. This is a link with XSS. This is a normal link. ');
    });
  });

  // Until pull request https://github.com/prismicio/prismic-richtext/pull/8
  // is released skip the following test...
  // context('applying mock object and join string "\\n"', function() {
  //   const result = asText(mock, '\n');

  //   it('should join blocks with one line break', function() {
  //     expect(result).to.equal('A > B\n<example>\n  TEST\n</example>\nThis is bold and italic and >:) both.');
  //   });
  // });
});

describe('asHtml', function() {
  context('applying mock object', function() {
    const result = asHtml(mock);

    const expectations = [
      '<p>A &gt; B</p>',
      '<pre>&lt;example&gt;\n  TEST\n&lt;/example&gt;</pre>',
      '<p>This is <strong>bold</strong> and <em>italic</em> and <em><strong>&gt;:) both</strong></em>.</p>',
      '<p>This is a <a  href="https://example.org&quot; onmouseover=&quot;alert(document.cookie);">link</a> with XSS.</p>',
      '<p>This is a normal <a  href="https://prismic.io">link</a>.</p>',
      '<p class=" block-img">\n      <img src="https://images.prismic.io/200629-sms-hoy/f0a757f6-770d-4eb8-a08b-f1727f1a58e4_guilherme-romano-KI2KaOeT670-unsplash.jpg?auto=compress,format" alt="An &quot;Atlantic&quot; Puffin" copyright="&quot;unsplash&quot;" />\n    </p>'
    ];

    it('should contain the first paragraph with special character escaped', function() {
      expect(result).have.string(expectations[0]);
    });

    it('should contain the preformatted element with special character escaped and line breaks preserved', function() {
      expect(result).have.string(expectations[1]);
    });

    it('should contain escaped external link', function() {
      expect(result).have.string(expectations[3]);
    });

    it('should contain valid external link', function() {
      expect(result).have.string(expectations[4]);
    });

    it('should contain valid image', function() {
      expect(result).have.string(expectations[5]);
    });
  });
});