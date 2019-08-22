export enum Elocales {
  en = "en",
  pt = "pt"
}

const { en, pt } = Elocales;

// TODO: I expect the default should be `en` in our case.
export default {
  langs: [en, pt],
  defaultLangKey: pt
};
