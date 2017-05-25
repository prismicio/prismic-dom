export default {
  url(link: any, linkResolver?: (doc: any, isBroken: boolean) => string): string {
    if(link.link_type === 'Document') {
      return linkResolver ? linkResolver(link, link.isBroken) : '';
    } else {
      return link.url;
    }
  }
}