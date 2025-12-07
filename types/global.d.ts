interface Joke {
  category: string;
  type: string;
  joke: string;
  id: number;
  lang: string;
}

declare global {
  interface Window {
    dd?: any;
  }
}
