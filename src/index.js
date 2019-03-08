import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={App} exact />
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);

