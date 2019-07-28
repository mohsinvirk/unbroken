import React from "react";
import { graphql } from "gatsby";
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
  <div
  >
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
