declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare const graphql: (query: TemplateStringsArray) => void;

declare module "react-intl";

declare module "ptz-i18n";

declare module "react-intl/locale-data/en";

declare module "intl/locale-data/jsonp/en";

declare module "react-intl/locale-data/pt";

declare module "intl/locale-data/jsonp/pt";

declare module "react-helmet";

declare module "*.svg";
declare module "*.svg?include";
declare module "*.svg?webp";
declare module "*.svg?inline";
declare module "*.svg?url";
declare module "*.svg?original";
declare module "*.svg?sprite";
