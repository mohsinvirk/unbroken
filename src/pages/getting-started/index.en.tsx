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
import FAQ from "../../components/LearnMoreFAQ/FAQ";
import LearnMoreHelp from "../../components/LearnMoreHelp/LearnMoreHelp";

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

const faqItems = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in ante id risus mollis mollis. Quisque fringilla sed augue nec lobortis.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in ante id risus mollis mollis. Quisque fringilla sed augue nec lobortis. Nam aliquet, tortor tempor congue euismod, est purus viverra massa, vel consectetur justo libero non felis. Nam in ornare nisl. Nunc nec rutrum tortor. Phasellus maximus, sem nec sagittis hendrerit, lectus nibh venenatis ex, at malesuada metus est in metus. Nunc ac scelerisque libero, in aliquam felis. In tempor nec arcu vel eleifend. Integer condimentum malesuada turpis viverra dictum. In ac sagittis tortor, vel sodales erat. Mauris ornare diam dolor, sed cursus orci egestas et. In quis elit dolor. Nulla eleifend nisl tincidunt libero laoreet ultricies."
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in ante id risus mollis mollis. Quisque fringilla sed augue nec lobortis. Nam aliquet, tortor tempor congue euismod, est purus viverra massa, vel consectetur justo libero non felis. Nam in ornare nisl. Nunc nec rutrum tortor. Phasellus maximus, sem nec sagittis hendrerit, lectus nibh venenatis ex, at malesuada metus est in metus. Nunc ac scelerisque libero, in aliquam felis. In tempor nec arcu vel eleifend. Integer condimentum malesuada turpis viverra dictum. In ac sagittis tortor, vel sodales erat. Mauris ornare diam dolor, sed cursus orci egestas et. In quis elit dolor. Nulla eleifend nisl tincidunt libero laoreet ultricies."
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in ante id risus mollis mollis. Quisque fringilla sed augue nec lobortis. Nam aliquet, tortor tempor congue euismod, est purus viverra massa, vel consectetur justo libero non felis. Nam in ornare nisl. Nunc nec rutrum tortor. Phasellus maximus, sem nec sagittis hendrerit, lectus nibh venenatis ex, at malesuada metus est in metus. Nunc ac scelerisque libero, in aliquam felis. In tempor nec arcu vel eleifend. Integer condimentum malesuada turpis viverra dictum. In ac sagittis tortor, vel sodales erat. Mauris ornare diam dolor, sed cursus orci egestas et. In quis elit dolor. Nulla eleifend nisl tincidunt libero laoreet ultricies."
  }
];

const learnmoreSubHeading =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim";

const learnmoreParaGraph =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.";

// TODO: How to add minimal styling to the text like bold/italic and links? Is that even possible like this?

const IndexPage = props => (
  <Layout location={props.location} {...props}>
    <>
      <LearnMoreHero
        navArrowItems={navArrowItems}
        navChevronItems={navChevronItems}
        to="learn-more"
        lang="en"
        navItems={navItems}
        heading="Learn more about exchanging euro’s"
      />

      <div className={`container ${styles.container}`}>
        <div className="columns">
          <div className="column is-offset-4 is-6">
            <LearnMoreSubheading text={learnmoreSubHeading} />

            <LearnMoreImage>
              <div className={styles.imageContainer}>Inline Image block</div>
            </LearnMoreImage>

            <LearnMoreParaGraph
              heading="Paragraph title"
              text={learnmoreParaGraph}
            />

            <LearnMoreVideo>
              <div className={styles.imageContainer}>Inline Video block</div>
            </LearnMoreVideo>

            <LearnMoreDownload
              heading="Downloads"
              downloadItems={downloadItem}
            />

            <FAQ heading="F. A. Q." faqItems={faqItems} />

            <LearnMoreHelp heading="How can we help?" />
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
