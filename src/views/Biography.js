import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import App from "../components/App";

const Biography = ({ t }) =>
{
    return (
        <App>
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

