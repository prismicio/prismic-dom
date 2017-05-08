export function getURL(value: any, linkResolver: (doc: any, isBroken: boolean) => string): string {
  return value.linkType === 'document'
    ? linkResolver(value, value.isBroken)
    : value.url;
};