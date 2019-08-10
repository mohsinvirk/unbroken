import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ScrollAnimation from "react-animate-on-scroll";

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
    <ScrollAnimation animateIn="fadeIn" animateOnce duration={2} delay={400}>
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
                    <div
                      className={`column is-6 is-hidden-mobile ${styles.imageColumn}`}
                    >
                      <Img
                        className={styles.heroImage}
                        fluid={data.fluid.childImageSharp.fluid}
                        alt="Etherium illustration"
                      />
                    </div>

                    <div
                      className={`column is-6 is-hidden-tablet ${styles.imageColumn}`}
                    >
                      <Img
                        className={styles.heroImage}
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
    </ScrollAnimation>
  );
};
export default HomeEtherium;
