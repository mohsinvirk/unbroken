import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Navbar, { INavItems } from "../Navbar/Navbar";
import MobileNav from "../MobileNav/MobileNav";
import Button from "../Button/Button";

import styles from "./styles.module.scss";

interface IProps {
  lang: string;
  navItems: Array<INavItems>;
  navArrowItems: Array<INavItems>;
  navChevronItems: Array<INavItems>;
  heading: string;
  subheading1: string;
  subheading2: string;
  buttonLabel: string;
  to?: string;
}

const HomeHero: React.FC<IProps> = ({
  lang,
  navItems,
  heading,
  subheading1,
  subheading2,
  buttonLabel,
  navArrowItems,
  navChevronItems,
  to
}) => {
  return (
    <section className={`${styles.homeHero}`}>
      <div className="container">
        <Navbar lang={lang} navItems={navItems} buttonLabel="Sign up" />
        <MobileNav
          lang={lang}
          navArrowItems={navArrowItems}
          navChevronItems={navChevronItems}
        />
      </div>
      <div>
        <div className="container">
          <div className={`columns ${styles.heroContent}`}>
            <div
              className={`column ${styles.heroColumn} ${styles.heroColumnContent}`}
            >
              <div className={styles.heroHeading}>{heading}</div>

              <div className={styles.heroSubHeading}>
                <p>
                  {subheading1} {subheading2}
                </p>
              </div>

              <Button
                medium
                withBackground
                label={buttonLabel}
                className={styles.button}
                to={to}
              />
            </div>

            <div className={`column ${styles.heroColumn}`}>
              <StaticQuery
                query={graphql`
                  query HeadingQuery {
                    file(relativePath: { eq: "hero.png" }) {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                `}
                render={(data: any) => (
                  <>
                    <Img
                      className={styles.heroImage}
                      fluid={data.file.childImageSharp.fluid}
                      alt="Hero illustration"
                    />
                    <div
                      className={`column is-hidden-tablet ${styles.gradientColumns}`}
                    ></div>
                  </>
                )}
              />
            </div>
          </div>
        </div>
        <div
          className={`column is-8 is-offset-4 is-hidden-mobile ${styles.gradientColumns}`}
        ></div>
      </div>
    </section>
  );
};
export default HomeHero;
