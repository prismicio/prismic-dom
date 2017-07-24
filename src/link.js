export default {
  url(link, linkResolver) {
    if(link.link_type === 'Document') {
      return linkResolver ? linkResolver(link, link.isBroken) : '';
    } else {
      return link.url;
    }
  }
}