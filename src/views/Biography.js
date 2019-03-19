import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import App from "../components/App";

const Biography = ({ t }) =>
{
    return (
        <App>
            <Helmet>
                <title>Pathos</title>
                <meta property="og:description" content="Pathos é uma banda de Minas Gerais, Brasil." />
                <meta property="og:image" content="http://kind-elion-04c521.netlify.com/image/banner.png" />
                <meta property="og:title" content="Pathos" />
                <meta property="og:type" content="music.musician" />
                <meta property="og:url" content="http://kind-elion-04c521.netlify.com/biography" />
            </Helmet>

            <div className="Biography">

            </div>
        </App>
    );
};

Biography.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Biography);

