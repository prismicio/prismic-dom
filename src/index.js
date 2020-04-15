const PrismicHelpers = require('prismic-helpers');
const RichText = require('./richtext');

const { Date, Link } = PrismicHelpers

console.log('HELLO PRISMIC DOM')

module.exports = {
  Date,
  Link,
  RichText,
}
