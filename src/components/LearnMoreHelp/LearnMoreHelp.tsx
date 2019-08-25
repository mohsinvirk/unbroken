import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "./styles.module.scss";

interface IProps {
  heading?: string;
}

const FAQ: React.FC<IProps> = ({ heading }) => {
  return (
    <div className={styles.help}>
      <h3 className={styles.heading}>{heading}</h3>

      <div className="columns">
        <div className="column is-4">
          <StaticQuery
            query={graphql`
              query HelpQuery {
                file(relativePath: { eq: "placeholder-image.png" }) {
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
                className={styles.heroImage}
                fixed={data.file.childImageSharp.fixed}
                alt="Placeholder Image"
              />
            )}
          />
        </div>
        <div className="column">
          <p className={styles.name}>Name</p>
          <p className={styles.function}>Funtion</p>

          <a href="mailto:abc@example.com" className={styles.email}>
            abc@example.com
          </a>
          <a href="tel:+31 (0) 12345678" className={styles.phone}>
            +31 (0) 12345678
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default FAQ;
