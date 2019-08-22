import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ScrollAnimation from "react-animate-on-scroll";

import HomeFeatureItem from "./HomeFeatureItem";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
  ethereumHeading: string;
  ethereumSubHeading: string;
  idealHeading: string;
  idealSubHeading: string;
  exchangeHeading: string;
  exchangeSubHeading: string;
}

const HomeFeatures: React.FC<IProps> = ({
  className,
  ethereumHeading,
  ethereumSubHeading,
  exchangeHeading,
  exchangeSubHeading,
  idealHeading,
  idealSubHeading
}) => {
  return (
    <div className={`container ${styles.features}`}>
      <ScrollAnimation animateIn="fadeIn" animateOnce duration={1}>
        <div className={`columns ${styles.columns}`}>
          <StaticQuery
            query={graphql`
              query EthereumQuery {
                etherium: file(relativePath: { eq: "etherium.png" }) {
                  childImageSharp {
                    fluid(maxWidth: 60, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                ideal: file(
                  relativePath: { eq: "ideal-logo-black-and-white.png" }
                ) {
                  childImageSharp {
                    fluid(maxWidth: 60, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                exchange: file(relativePath: { eq: "exchange.png" }) {
                  childImageSharp {
                    fluid(maxWidth: 60, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => {
              return (
                <>
                  <HomeFeatureItem
                    heading={ethereumHeading}
                    subheading={ethereumSubHeading}
                  >
                    <Img
                      fluid={data.etherium.childImageSharp.fluid}
                      alt="etherium"
                    />
                  </HomeFeatureItem>

                  <HomeFeatureItem
                    heading={idealHeading}
                    subheading={idealSubHeading}
                  >
                    <Img
                      fluid={data.ideal.childImageSharp.fluid}
                      alt="ideal logo"
                    />
                  </HomeFeatureItem>

                  <HomeFeatureItem
                    heading={exchangeHeading}
                    subheading={exchangeSubHeading}
                  >
                    <Img
                      fluid={data.exchange.childImageSharp.fluid}
                      alt="exchange"
                    />
                  </HomeFeatureItem>
                </>
              );
            }}
          />
        </div>
      </ScrollAnimation>
    </div>
  );
};
export default HomeFeatures;
