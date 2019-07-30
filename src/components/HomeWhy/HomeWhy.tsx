import React from "react";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";

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
    <section className={styles.why}>
      <div className="container">
        <div className="columns is-gapless">
          <div className="column">
            <StaticQuery
              query={graphql`
                query WhyUnbrokenQuery {
                  file(relativePath: { eq: "why-unbroken.png" }) {
                    childImageSharp {
                      fixed {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              `}
              render={(data: any) => (
                <Img
                  className={styles.image}
                  fixed={data.file.childImageSharp.fixed}
                  alt="Hero illustration"
                />
              )}
            />
          </div>
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
              <Button large withBackground label={buttonLabel} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeWhy;
