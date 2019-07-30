import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n";
import { IntlProvider } from "react-intl";

import Footer from "../components/Footer/Footer";
import { Elocales } from "../data/languages";

import "intl";
import "./index.scss";

const footerItems = [
  {
    heading: "About us",
    links: [
      {
        label: "Mission",
        linkTo: "/mission"
      },
      {
        label: "Jobs",
        linkTo: "/jobs"
      },
      {
        label: "Culture",
        linkTo: "/culture"
      }
    ]
  },
  {
    heading: "Support",
    links: [
      {
        label: "Documentation",
        linkTo: "/documentation"
      },
      {
        label: "Contact",
        linkTo: "/contact"
      },
      {
        label: "Live status",
        linkTo: "/live-status"
      }
    ]
  },
  {
    heading: "Account",
    links: [
      {
        label: "Login",
        linkTo: "/login"
      },
      {
        label: "Sign-up",
        linkTo: "/sign-up"
      }
    ]
  }
];

interface IProps {
  lang: string;
  children: React.ReactNode;
  location: {
    pathname: string;
  };
  data: {
    site: {
      siteMetadata: {
        languages: {
          langs: Array<Elocales>;
          defaultLangKey: string;
        };
      };
    };
  };
  i18nMessages: any;
}

const TemplateWrapper: React.FC<IProps> = ({
  lang,
  children,
  data,
  location,
  i18nMessages
}) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <div>
        <Helmet
          title="Unbroken"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <div>{children}</div>
        <Footer lang={lang} footerItems={footerItems} />
      </div>
    </IntlProvider>
  );
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query Layout {
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
