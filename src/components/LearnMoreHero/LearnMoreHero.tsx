import React from "react";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Navbar, { INavItems } from "../Navbar/Navbar";
import Button from "../Button/Button";

import styles from "./styles.module.scss";

interface IProps {
  lang: string;
  navItems: Array<INavItems>;
  heading: string;
}

const HomeHero: React.FC<IProps> = ({ lang, navItems, heading }) => {
  return (
    <>
      <section className={`${styles.homeHero}`}>
        <div className="container">
          <Navbar lang={lang} navItems={navItems} buttonLabel="Sign up" />
        </div>
        <div>
          <div className="container">
            <h1 className="is-center">Learn more about exchanging euro’s</h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeHero;
