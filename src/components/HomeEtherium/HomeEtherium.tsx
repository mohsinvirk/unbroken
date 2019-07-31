import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Navbar, { INavItems } from "../Navbar/Navbar";
import Button from "../Button/Button";

import styles from "./styles.module.scss";

interface IProps {
  heading: string;
  subheading: string;
  buttonLabel: string;
}

const HomeEtherium: React.FC<IProps> = ({
  heading,
  subheading,
  buttonLabel
}) => {
  return (
    <>
      <section className={`${styles.homeHero}`}>
        <div>
          <div className="">
            <div className={`columns ${styles.heroContent}`}>
              <div className={`column is-6 ${styles.imageColumn}`}>
                <StaticQuery
                  query={graphql`
                    query HomeEtheriumQuery {
                      file(relativePath: { eq: "etherium-illustration.png" }) {
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
                      style={{
                        transform: "translateY(33px)"
                      }}
                      fluid={data.file.childImageSharp.fluid}
                      alt="Hero illustration"
                    />
                  )}
                />
              </div>
              <div className={`column is-6 ${styles.heroColumn}`}>
                <div className={styles.heroHeading}>{heading}</div>

                <div className={styles.heroSubHeading}>
                  <p>{subheading}</p>
                </div>

                <Button
                  large
                  withBackground
                  label={buttonLabel}
                  className={styles.button}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeEtherium;
