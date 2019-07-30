import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/en";

import HomeHero from "../components/HomeHero/HomeHero";
import HomeFeatures from "../components/HomeFeatures/HomeFeatures";
import HomeEtherium from "../components/HomeEtherium/HomeEtherium";
import HomeSteps from "../components/HomeSteps/HomeSteps";
import HomeWhy from "../components/HomeWhy/HomeWhy";

const navItems = [
  {
    name: "Learn more",
    slug: "/learn-more"
  },
  {
    name: "About us",
    slug: "/about-us"
  },
  {
    name: "Support",
    slug: "/support"
  },
  {
    name: "Login",
    slug: "/login"
  }
];

const whyItems = [
  {
    heading: "Direct transfer",
    subheading: "We do not hold your currency. It it  sended out immediately."
  },
  {
    heading: "Real time",
    subheading:
      "shows real time statistics after purchase, you always know where your money is."
  },
  {
    heading: "Best in class customer support",
    subheading:
      "is transparent and is getting regular security checks by 3rd party’s. "
  },
  {
    heading: "Secure",
    subheading:
      "We are transparent  about our security and is getting regular security checks by 3rd party’s."
  }
];

const IndexPage = props => (
  <Layout location={props.location} {...props}>
    <>
      <HomeHero
        lang="en"
        navItems={navItems}
        heading="Ethereum exchange made simple"
        subheading1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        subheading2="Aenean commodo ligula eget dolor."
        buttonLabel="Get started"
      />

      <HomeFeatures
        ethereumHeading="Etherium"
        ethereumSubHeading="Buy with Euros"
        exchangeHeading="Already exchanged 3.4 mln"
        exchangeSubHeading="During our private beta"
        idealHeading="Supported in Europe"
        idealSubHeading="Multiple payment methods"
      />

      <HomeEtherium
        heading="Currency for the digital era"
        subheading="Ethereum is a secure digital currency that is free to use for instant payments anywhere in the world. It is a new form of currency designed for the internet era."
        buttonLabel="More about Ethereum"
      />

      <HomeSteps
        signupHeading="Sign up"
        signupSubHeading="Register with your personal information, create an account and login to your personal page."
        signupButtonLabel="Get started"
        signupCount="01"
        verifyHeading="Verify"
        verifySubHeading="To make sure we deal with the right people, we need to some information to verify your account."
        verifyButtonLabel="More about our process"
        verifyCount="02"
        buyHeading="Buy and transfer"
        buySubHeading="Buy any amount of currency and transfer it directly to your wallet or an exchange."
        buyButtonLabel="More about buying"
        buyCount="03"
      />

      <HomeWhy items={whyItems} heading="Why unbroken?" buttonLabel="Sign up" />
    </>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query LayoutIndexEn {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
