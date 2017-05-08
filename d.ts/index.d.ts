declare var _default: {
    Date: (date?: string | undefined) => Date | null;
    RichText: {
        asText(structuredText: any[]): string;
        asHtml(structuredText: any[], linkResolver: (doc: any, isBroken: boolean) => string, htmlSerializer: (element: HTMLElement, content: string) => string): string;
    };
};
export default _default;
