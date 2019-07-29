import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/en";

import HomeHero from "../components/HomeHero/HomeHero";
import HomeFeatures from "../components/HomeFeatures/HomeFeatures";

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
