/* eslint-disable import/first */

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";

// views
import Home from "./views/Home";

// style
import "./index.css";
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

