import React from "react";
import Layout from "./index";
import { addLocaleData } from "react-intl";

import pt from "react-intl/locale-data/pt";
import "intl/locale-data/jsonp/pt";

addLocaleData(pt);

export default props => <Layout {...props}   lang="pt" />;
