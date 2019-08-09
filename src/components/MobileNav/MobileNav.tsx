import React from "react";
import Link from "gatsby-link";

import styles from "./styles.module.scss";

import logo from "../../images/unbroken-logo-white.png";
import logoBlack from "../../images/unbroken-logo-black.png";
import closeicon from "../../images/close.svg";
import search from "../../images/search.svg";
import arrow from "../../images/arrow-right-mobile.svg";
import chevron from "../../images/chevron.svg";
import burger from "../../images/burger.svg";
import arrowleft from "../../images/arrow-left.svg";

export interface INavItems {
  name: string;
  slug: string;
  isActive?: boolean;
}
interface IProps {
  lang: string;
  navArrowItems: Array<INavItems>;
  navChevronItems: Array<INavItems>;
  to?: string;
}

const MobileNav: React.FC<IProps> = ({
  lang,
  navArrowItems,
  navChevronItems,
  to
}) => {
  const [isBurgerActive, setBurgerActive] = React.useState<boolean>(false);

  const navbarLinks = navArrowItems.map((item, index) => (
    <Link
      className={`columns is-mobile ${styles.SearchColumn}`}
      key={index}
      to={`/${lang}/${item.slug}`}
    >
      <div className={`column ${styles.navbarItem}`}>
        <p
          className={`${styles.navbarItemLink}  ${item.isActive &&
            styles.isActive}`}
        >
          {item.name}
        </p>
      </div>

      <div className="column">
        <img
          src={arrow}
          onClick={() => setBurgerActive(!isBurgerActive)}
          className="is-pulled-right"
        />
      </div>
    </Link>
  ));

  const navbarLinksWithChevron = navChevronItems.map((item, index) => (
    <Link
      className={`columns is-mobile ${styles.chevronColumn}`}
      key={index}
      to={`/${lang}/${item.slug}`}
    >
      <div className={`column ${styles.navbarItem}`}>
        <p
          className={`${styles.navbarItemChevron}  ${item.isActive &&
            styles.isActive}`}
        >
          {item.name}
        </p>
      </div>

      <div className="column">
        <img
          src={chevron}
          onClick={() => setBurgerActive(!isBurgerActive)}
          className="is-pulled-right"
        />
      </div>
    </Link>
  ));

  return (
    <div className="is-hidden-desktop">
      <nav
        className="navbar is-transparent container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          {to ? (
            <Link className={`navbar-item ${styles.back}`} to="/en/learn-more">
              <img src={arrowleft} alt="<-" />{" "}
              <span className={styles.backtext}>Overview</span>
            </Link>
          ) : (
            <Link className="navbar-item" to={`/${lang}/`}>
              <img src={logoBlack} width="112" height="28" />
            </Link>
          )}

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setBurgerActive(!isBurgerActive)}
          >
            <img
              src={burger}
              onClick={() => setBurgerActive(!isBurgerActive)}
              className={`is-pulled-right ${styles.burgerIcon}`}
            />
          </a>
        </div>

        {isBurgerActive && (
          <div
            id="navbarBasicExample"
            className={`navbar-menu ${styles.navbar} `}
          >
            <div className={styles.content}>
              <div className={`columns is-mobile ${styles.columns}`}>
                <div className="column is-half-mobile ">
                  <Link
                    to={`/${lang}/`}
                    onClick={() => setBurgerActive(!isBurgerActive)}
                  >
                    <img src={logo} width="112" height="28" />
                  </Link>
                </div>

                <div className="column is-half-mobile">
                  <img
                    src={closeicon}
                    onClick={() => setBurgerActive(!isBurgerActive)}
                    className="is-pulled-right"
                  />
                </div>
              </div>

              <div className={`columns is-mobile ${styles.SearchColumn}`}>
                <div className={`column ${styles.search}`}>
                  <img
                    src={search}
                    onClick={() => setBurgerActive(!isBurgerActive)}
                  />
                </div>

                <div className="column">
                  <input
                    className={styles.input}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                  />
                </div>
              </div>
              {navbarLinks}

              {navbarLinksWithChevron}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
export default MobileNav;
