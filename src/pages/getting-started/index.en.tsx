import React from "react";
import { graphql } from "gatsby";
import Layout from "../../layouts/en";

import LearnMoreHero from "../../components/LearnMoreItemHeader/LearnMoreItemHeader";
import LearnMoreSubheading from "../../components/LearnMoreSubheading/LearnMoreSubheading";

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

const IndexPage = props => (
  <Layout location={props.location} {...props}>
    <>
      <LearnMoreHero
        lang="en"
        navItems={navItems}
        heading="Learn more about exchanging euro’s"
      />

      <div className="container">
        <div className="columns">
          <div className="column is-offset-4 is-6">
            <LearnMoreSubheading
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim"
            />
          </div>
        </div>
      </div>
    </>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query GettingStartedEn {
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
