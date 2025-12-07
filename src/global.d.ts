// global.d.ts
export {};

declare global {
  interface Joke {
    category: string;
    type: string;
    joke: string;
    id: number;
    lang: string;
  }

  interface Window {
    dd?: any;
  }
}
