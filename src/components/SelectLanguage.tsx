// TODO: This seems to be an unremoved relic from the starter pack. (it does show how to make a language menu)

import React from "react";
import Link from "gatsby-link";

export interface ILangs {
  link: string;
  langKey?: string;
  selected: boolean;
}

interface IProps {
  langs: Array<ILangs>;
}

const SelectLanguage: React.FC<IProps> = ({ langs }) => {
  const links = langs.map(lang => (
    <Link
      to={lang.link}
      key={lang.langKey}
      style={{
        color: "white"
      }}
    >
      <li data-selected={lang.selected}>{lang.langKey}</li>
    </Link>
  ));

  return (
    <div>
      <ul>{links}</ul>
    </div>
  );
};

export default SelectLanguage;
