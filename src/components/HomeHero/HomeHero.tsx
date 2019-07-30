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
  subheading1: string;
  subheading2: string;
  buttonLabel: string;
}

const HomeHero: React.FC<IProps> = ({
  lang,
  navItems,
  heading,
  subheading1,
  subheading2,
  buttonLabel
}) => {
  return (
    <>
      <section className={`${styles.homeHero}`}>
        <div className="container">
          <Navbar lang={lang} navItems={navItems} buttonLabel="Sign up" />
        </div>
        <div>
          <div className="container">
            <div className={`columns ${styles.heroContent}`}>
              <div className={`column ${styles.heroColumn}`}>
                <div className={styles.heroHeading}>{heading}</div>

                <div className={styles.heroSubHeading}>
                  <p>{subheading1}</p>
                  <p>{subheading2}</p>
                </div>

                <Button
                  medium
                  withBackground
                  label={buttonLabel}
                  className={styles.button}
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
                    <Img
                      className={styles.heroImage}
                      fluid={data.file.childImageSharp.fluid}
                      alt="Hero illustration"
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div
            className={`column is-8 is-offset-4 ${styles.gradientColumns}`}
          ></div>
        </div>
      </section>
    </>
  );
};
export default HomeHero;
