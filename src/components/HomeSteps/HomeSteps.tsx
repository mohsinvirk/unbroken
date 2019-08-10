import React from "react";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";
import ScrollAnimation from "react-animate-on-scroll";

import HomeFeatureItem from "./HomeStepsItem";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
  signupHeading: string;
  signupSubHeading: string;
  signupButtonLabel: string;
  signupCount: string;
  verifyHeading: string;
  verifySubHeading: string;
  verifyButtonLabel: string;
  verifyCount: string;
  buyHeading: string;
  buySubHeading: string;
  buyButtonLabel: string;
  buyCount: string;
}

const HomeSteps: React.FC<IProps> = ({
  className,
  signupHeading,
  signupSubHeading,
  signupButtonLabel,
  signupCount,
  verifyHeading,
  verifySubHeading,
  verifyButtonLabel,
  verifyCount,
  buyHeading,
  buySubHeading,
  buyButtonLabel,
  buyCount
}) => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce duration={1}>
      <div className={styles.steps}>
        <div className="container">
          <div className="columns is-multiline">
            <StaticQuery
              query={graphql`
                query EthQuery {
                  signup: file(relativePath: { eq: "signup.png" }) {
                    childImageSharp {
                      fluid(maxWidth: 320, quality: 72) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  verify: file(relativePath: { eq: "verify.png" }) {
                    childImageSharp {
                      fluid(maxWidth: 320, quality: 72) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  buy: file(relativePath: { eq: "buyandtransfer.png" }) {
                    childImageSharp {
                      fluid(maxWidth: 320, quality: 72) {
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
                      heading={signupHeading}
                      subheading={signupSubHeading}
                      count={signupCount}
                      buttonLabel={signupButtonLabel}
                    >
                      <Img
                        fluid={data.signup.childImageSharp.fluid}
                        alt="etherium"
                      />
                    </HomeFeatureItem>

                    <HomeFeatureItem
                      heading={verifyHeading}
                      subheading={verifySubHeading}
                      count={verifyCount}
                      buttonLabel={verifyButtonLabel}
                    >
                      <Img
                        fluid={data.verify.childImageSharp.fluid}
                        alt="ideal logo"
                      />
                    </HomeFeatureItem>

                    <HomeFeatureItem
                      heading={buyHeading}
                      subheading={buySubHeading}
                      count={buyCount}
                      buttonLabel={buyButtonLabel}
                    >
                      <Img
                        fluid={data.buy.childImageSharp.fluid}
                        alt="exchange"
                      />
                    </HomeFeatureItem>
                  </>
                );
              }}
            />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};
export default HomeSteps;
