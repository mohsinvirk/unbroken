import React from "react"; 
import Layout from "./index"; // TODO: please explain why there is no Layout in ./index.tsx, while angeloocana's starter pack does define it there.
import { addLocaleData } from "react-intl";

import messages from "../data/messages/en";
import en from "react-intl/locale-data/en";
import "intl/locale-data/jsonp/en";

addLocaleData(en);

export default props => <Layout {...props} i18nMessages={messages} lang="en" />;
