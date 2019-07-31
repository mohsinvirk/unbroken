import React from "react";
import { graphql } from "gatsby";
import Layout from "../../layouts/en";

import styles from "./styles.module.scss";

import LearnMoreHero from "../../components/LearnMoreItemHeader/LearnMoreItemHeader";
import LearnMoreSubheading from "../../components/LearnMoreSubheading/LearnMoreSubheading";
import LearnMoreImage from "../../components/LearnMoreImage/LearnMoreImage";
import LearnMoreParaGraph from "../../components/LearnMoreParaGraph/LearnMoreParaGraph";
import LearnMoreVideo from "../../components/LearnMoreVideo/LearnMoreVideo";
import LearnMoreDownload from "../../components/LearnMoreDownload/LearnMoreDownload";

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

const downloadItem = [
  {
    downloadLink: "https://unbroken.io",
    linkTitle: "Terms of Service",
    optionalText: "Small discription (optional)"
  },
  {
    downloadLink: "https://unbroken.io",
    linkTitle: "Privacy statement",
    optionalText: "Small discription (optional)"
  },
  {
    downloadLink: "https://unbroken.io",
    linkTitle: "Terms of service",
    optionalText: "Small discription (optional)"
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

            <LearnMoreImage>
              <div className={styles.imageContainer}>Inline Image block</div>
            </LearnMoreImage>

            <LearnMoreParaGraph
              heading="Paragraph title"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
               rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
               eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui."
            />

            <LearnMoreVideo>
              <div className={styles.imageContainer}>Inline Video block</div>
            </LearnMoreVideo>

            <LearnMoreDownload
              heading="Downloads"
              downloadItems={downloadItem}
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
