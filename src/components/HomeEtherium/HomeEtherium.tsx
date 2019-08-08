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
              <StaticQuery
                query={graphql`
                  query HomeEtheriumQuery {
                    fluid: file(
                      relativePath: { eq: "etherium-illustration.png" }
                    ) {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    fixed: file(
                      relativePath: { eq: "etherium-illustration-mobile.png" }
                    ) {
                      childImageSharp {
                        fixed(height: 480) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                `}
                render={(data: any) => (
                  <>
                    <div className={`column is-6 is-hidden-mobile ${styles.imageColumn}`}>
                      <Img
                        className={styles.heroImage}
                        style={{
                          transform: "translateY(33px)"
                        }}
                        fluid={data.fluid.childImageSharp.fluid}
                        alt="Etherium illustration"
                      />
                    </div>

                    <div className={`column is-6 is-hidden-tablet ${styles.imageColumn}`}>
                      <Img
                        className={styles.heroImage}
                        style={{
                          transform: "translateY(33px)"
                        }}
                        fixed={data.fixed.childImageSharp.fixed}
                        alt="Etherium illustration"
                      />
                    </div>
                  </>
                )}
              />
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
