export const pages: {
  url: string;
  responseCode: number;
}[] = [
  {
    url: "https://www.w3.org/standards/badpage",
    responseCode: 404
  },
  {
    url: "https://www.w3.org/standards/webofdevices/multimodal",
    responseCode: 200
  },
  {
    url: "https://www.w3.org/standards/webdesign/htmlcss",
    responseCode: 200
  }
];

export const pagesToCheckConsoleErrors: string[] = [
  "https://www.w3.org/standards/badpage",
  "https://www.w3.org/standards/webofdevices/multimodal",
  "https://www.w3.org/standards/webdesign/htmlcss",
  "index.html"
];
