export declare enum TagType {
}
export declare function insertSpans(text: string, spans: any, linkResolver: (doc: any, isBroken: boolean) => string, htmlSerializer: (element: HTMLElement, content: string) => string): string;
