import React from "react";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";
import ScrollAnimation from "react-animate-on-scroll";

import HomeWhyItem from "./HomeWhyItem";
import Button from "../Button/Button";

import styles from "./styles.module.scss";

export interface IWhyItem {
  heading: string;
  subheading: string;
}

interface IProps {
  heading: string;
  buttonLabel: string;
  items: Array<IWhyItem>;
}

const HomeWhy: React.FC<IProps> = ({ items, heading, buttonLabel }) => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce duration={1}>
      <section className={styles.why}>
        <div className="container">
          <div className="columns is-gapless">
            <StaticQuery
              query={graphql`
                query WhyUnbrokenQuery {
                  fixed: file(relativePath: { eq: "why-unbroken.png" }) {
                    childImageSharp {
                      fixed {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                  fluid: file(relativePath: { eq: "why-unbroken.png" }) {
                    childImageSharp {
                      fixed(height: 420) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              `}
              render={(data: any) => (
                <>
                  <div className="column is-hidden-mobile">
                    <Img
                      className={styles.image}
                      fixed={data.fixed.childImageSharp.fixed}
                      alt="Why illustration"
                    />
                  </div>
                  <div
                    className={`column is-hidden-tablet is-vcentered ${styles.mobileImage}`}
                  >
                    <Img
                      className={styles.image}
                      fixed={data.fluid.childImageSharp.fixed}
                      alt="Why illustration"
                    />
                  </div>
                </>
              )}
            />
            <div className="column">
              <h1 className={styles.heading}>{heading}</h1>
              <div className="columns is-multiline">
                {items.map(({ heading, subheading }, index) => (
                  <HomeWhyItem
                    key={index}
                    heading={heading}
                    subheading={subheading}
                  />
                ))}
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
export default HomeWhy;
