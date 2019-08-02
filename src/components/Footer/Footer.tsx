import React from "react";
import Link from "gatsby-link";

import FooterItem, { ILink } from "./FooterItem";

import styles from "./styles.module.scss";

import logo from "../../images/unbroken-logo-white.png";

export interface IFooterItem {
  heading: string;
  links: Array<ILink>;
}

interface IProps {
  lang: string;
  footerItems: Array<IFooterItem>;
}

const Footer: React.FC<IProps> = ({ lang, footerItems }) => {
  return (
    <section className={`${styles.footer}`}>
      <div className="container">
        <div className="columns is-mobile is-multiline">
          <div className="column is-half-desktop is-full-mobile">
            <Link to={`/${lang}/`}>
              <img src={logo} width="112" height="28" />
            </Link>
          </div>

          {footerItems.map((item, index) => (
            <FooterItem
              key={index}
              heading={item.heading}
              links={item.links}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Footer;
