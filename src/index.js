/* eslint-disable import/first */

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";

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

// views
import Elixir from "./views/Elixir";
import Home from "./views/Home";
import Rapture from "./views/Rapture";

// locale
import "./i18n";

// render
ReactDOM.render(
    <Router history={ history }>
        <div>
            <Route path="/" component={Home} exact />
            <Route path="/elixir" component={Elixir} exact />
            <Route path="/rapture" component={Rapture} exact />
        </div>
    </Router>,
    document.getElementById("root")
);

