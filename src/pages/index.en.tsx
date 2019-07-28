import React from "react";
import Layout from "../layouts/en";

import HomeHero from "../components/HomeHero/HomeHero";

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
      <HomeHero lang="en" navItems={navItems}/>
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
