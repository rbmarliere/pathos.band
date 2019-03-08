/* eslint-disable import/first */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App";
import { BrowserRouter, Route } from "react-router-dom";

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

ReactDOM.render(
    <BrowserRouter history={ history }>
        <div>
            <Route path="/" component={App} exact />
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);

