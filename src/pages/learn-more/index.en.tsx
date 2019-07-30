import React from "react";
import { graphql } from "gatsby";
import Layout from "../../layouts/en";

import LearnMoreHero from "../../components/LearnMoreHero/LearnMoreHero";

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
      <LearnMoreHero
        lang="en"
        navItems={navItems}
        heading="Learn more about exchanging euro’s"
      />

    </>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query LearnMoreEn {
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
