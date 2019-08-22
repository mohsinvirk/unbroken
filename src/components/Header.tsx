// TODO: This seems to be an unremoved relic from the starter pack. (it does show how to make a language menu)

import React from "react";
import Link from "gatsby-link";
import SelectLanguage from "./SelectLanguage";

export interface ILangs {
  link: string;
  langKey?: string;
  selected: boolean;
}

interface IProps {
  langs: Array<ILangs>;
}

const Header: React.FC<IProps> = props => (
  <div>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Gatsby
        </Link>
      </h1>
      <SelectLanguage langs={props.langs} />
    </div>
  </div>
);

export default Header;
