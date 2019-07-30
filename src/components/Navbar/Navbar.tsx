import React from "react";
import Link from "gatsby-link";

import Button from "../Button/Button";

import styles from "./styles.module.scss";

import logo from "../../images/unbroken-logo-black.png";

export interface INavItems {
  name: string;
  slug: string;
}
interface IProps {
  lang: string;
  navItems: Array<INavItems>;
  buttonLabel: string;
}

const Header: React.FC<IProps> = ({ lang, navItems, buttonLabel }) => {
  const [isBurgerActive, setBurgerActive] = React.useState<boolean>(false);

  const navbarLinks = navItems.map((item, index) => (
    <div className={`navbar-item ${styles.navbarItem}`} key={index}>
      <Link to={`/${lang}/${item.slug}`} className={styles.navbarItemLink}>
        {item.name}
      </Link>
    </div>
  ));

  return (
    <>
      <nav
        className="navbar is-transparent container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to={`/${lang}/`}>
            <img src={logo} width="112" height="28" />
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setBurgerActive(!isBurgerActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isBurgerActive && `is-active`}`}
        >
          <div className="navbar-end">
            {navbarLinks}
            <Button
              className={styles.button}
              medium
              withBackground
              label={buttonLabel}
            />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
