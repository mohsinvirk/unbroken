import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { FormattedMessage } from "react-intl";

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
    <section>
      <header
        style={{
          color: "white"
        }}
      >
        <FormattedMessage id="selectLanguage" />
      </header>
      <ul>{links}</ul>
    </section>
  );
};

export default SelectLanguage;
