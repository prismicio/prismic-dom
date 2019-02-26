import { expect } from "chai";
import RichText from "../src/richtext.js";
const asText = RichText.asText;
const asHtml = RichText.asHtml;
const asMarkdown = RichText.asMarkdown;

const mock = [
  { type: "heading1", text: "Title", spans: [] },
  { type: "paragraph", text: "A > B", spans: [] },
  { type: "preformatted", text: "<example>\n  TEST\n</example>", spans: [] },
  {
    type: "paragraph",
    text: "This is bold and italic and >:) both.",
    spans: [
      {
        start: 8,
        end: 12,
        type: "strong"
      },
      {
        start: 17,
        end: 23,
        type: "em"
      },
      {
        start: 28,
        end: 36,
        type: "strong"
      },
      {
        start: 28,
        end: 36,
        type: "em"
      }
    ]
  }
];

describe("asText", function() {
  context(
    "applying mock object using default join string (undefined)",
    function() {
      const result = asText(mock);

      // Note: Currently there is '\n ' added to the output.
      // See: https://github.com/prismicio/prismic-richtext/issues/7
      // Until pull request https://github.com/prismicio/prismic-richtext/pull/8
      // is released, we test for the old behaviour.
      it("should join blocks with one whitespace (default)", function() {
        expect(result).to.equal(
          "Title A > B <example>\n  TEST\n</example> This is bold and italic and >:) both."
        );
      });
    }
  );

  // Until pull request https://github.com/prismicio/prismic-richtext/pull/8
  // is released skip the following test...
  // context('applying mock object and join string "\\n"', function() {
  //   const result = asText(mock, '\n');

  //   it('should join blocks with one line break', function() {
  //     expect(result).to.equal('A > B\n<example>\n  TEST\n</example>\nThis is bold and italic and >:) both.');
  //   });
  // });
});

describe("asHtml", function() {
  context("applying mock object", function() {
    const result = asHtml(mock);
    const expectations = [
      "<h1>Title</h1>",
      "<p>A &gt; B</p>",
      "<pre>&lt;example&gt;\n  TEST\n&lt;/example&gt;</pre>",
      "<p>This is <strong>bold</strong> and <em>italic</em> and <strong><em>&gt;:) both</em></strong>.</p>"
    ];

    it("should contain a title", function() {
      expect(result).have.string(expectations[0]);
    });

    it("should contain the first paragraph with special character escaped", function() {
      expect(result).have.string(expectations[1]);
    });

    it("should contain the preformatted element with special character escaped and line breaks preserved", function() {
      expect(result).have.string(expectations[2]);
    });

    it("should contain the second paragraph with tags added special character escaped in text content only", function() {
      expect(result).have.string(expectations[3]);
    });

    it("should equal the expected string in full", function() {
      expect(result).to.equal(expectations.join(""));
    });
  });
});

describe("asMarkdown", function() {
  context("applying mock object", function() {
    const result = asMarkdown(mock);
    const expectations = [
      "# Title\n\n",
      "A > B\n\n",
      "```\n<example>\n  TEST\n</example>\n```\n\n",
      "This is **bold** and _italic_ and **_>:) both_**.\n\n"
    ];

    it("should contain the first paragraph with special character escaped", function() {
      expect(result).have.string(expectations[0]);
    });

    it("should contain the preformatted element with special character escaped and line breaks preserved", function() {
      expect(result).have.string(expectations[1]);
    });

    it("should contain the second paragraph with tags added special character escaped in text content only", function() {
      expect(result).have.string(expectations[2]);
    });

    it("should equal the expected string in full", function() {
      expect(result).to.equal(expectations.join(""));
    });
  });
});
