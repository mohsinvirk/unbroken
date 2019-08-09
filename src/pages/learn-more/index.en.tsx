import React from "react";
import { graphql } from "gatsby";
import Layout from "../../layouts/en";

import LearnMoreHero from "../../components/LearnMoreHero/LearnMoreHero";
import LearnMoreItems from "../../components/LearnMoreItem/LearnMoreItem";

const navItems = [
  {
    name: "Learn more",
    slug: "/learn-more",
    isActive: true
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

const navArrowItems = [
  {
    name: "Sign up",
    slug: "/sign-up"
  },
  {
    name: "Learn more",
    slug: "/learn-more"
  },
  {
    name: "Support",
    slug: "/support"
  }
];

const navChevronItems = [
  {
    name: "Contact",
    slug: "/contact"
  },
  {
    name: "About us",
    slug: "/about-us"
  }
];

const readMoreItems = [
  {
    count: "01",
    heading: "About Ethereum",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    linktext: "Learn more",
    linkTo: "about-etherium",
    backgroundColor: "#FCF4F1"
  },
  {
    count: "02",
    heading: "Buying digital currency",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    linktext: "Learn more",
    linkTo: "buying-digital-currency",
    backgroundColor: "#e7e7dc7c"
  },
  {
    count: "03",
    heading: "Wallets",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    linktext: "Learn more",
    linkTo: "wallets",
    backgroundColor: "#DBF3F7"
  },
  {
    count: "04",
    heading: "Page title",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    linktext: "Learn more",
    linkTo: "page-title",
    backgroundColor: "#EDF1F2"
  },
  {
    count: "05",
    heading: "Getting started",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    linktext: "Learn more",
    linkTo: "getting-started",
    backgroundColor: "#EDF1F2"
  },
  {
    count: "06",
    heading: "Our method",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    linktext: "Learn more",
    linkTo: "our-method",
    backgroundColor: "#DBEEE3"
  }
];

const IndexPage = props => (
  <Layout location={props.location} {...props}>
    <>
      <LearnMoreHero
        lang="en"
        navItems={navItems}
        navArrowItems={navArrowItems}
        navChevronItems={navChevronItems}
        heading="Learn more about exchanging euro’s"
      />
      <LearnMoreItems lang="en" items={readMoreItems} />
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
