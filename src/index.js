/* eslint-disable import/first */

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";

// views
import Home from "./views/Home";

// fa
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBandcamp,
    faFacebook,
    faInstagram,
    faSpotify,
    faTwitter,
    faYoutube } from "@fortawesome/free-brands-svg-icons";
library.add(
    faBandcamp,
    faFacebook,
    faInstagram,
    faSpotify,
    faTwitter,
    faYoutube );

// style
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// google analytics
import ReactGA from "react-ga";
ReactGA.initialize( "UA-135913409-1" );
ReactGA.pageview( window.location.pathname );
import createHistory from "history/createBrowserHistory";
const history = createHistory();
history.listen( (location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview( location.pathname );
});

// render
ReactDOM.render(
    <Router history={ history }>
        <div>
            <Route path="/" component={Home} exact />
        </div>
    </Router>,
    document.getElementById("root")
);

