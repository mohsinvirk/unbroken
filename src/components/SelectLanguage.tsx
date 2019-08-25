// TODO: this component will be used as flags to SELECT the language.

import React from "react";
import Link from "gatsby-link";

import styles from "./styles.module.scss";

enum Elangs {
  en = "en",
  pt = "pt"
}

const SelectLanguage: React.FC = () => {
  const { en, pt } = Elangs;
  const langs = [en, pt];
  const links = langs.map(lang => (
    <Link
      to={lang}
      key={lang}
      style={{
        color: "white"
      }}
    >
      <span className={`flag-icon flag-icon-${lang === en ? "us" : lang} ${styles.flag} `} />
    </Link>
  ));

  return (
    <div className={styles.flags}>
      <ul>{links}</ul>
    </div>
  );
};

export default SelectLanguage;
