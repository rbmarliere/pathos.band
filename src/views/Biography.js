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
                <meta property="og:description" content="Pathos é uma banda de Minas Gerais, Brasil." />
                <meta property="og:image" content="http://pathos.band/image/rapture.png" />
                <meta property="og:title" content="Pathos" />
                <meta property="og:type" content="music.musician" />
                <meta property="og:url" content="http://pathos.band/biography" />
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

