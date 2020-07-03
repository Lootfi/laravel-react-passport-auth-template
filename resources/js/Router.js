import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//importing pages
import PrivateRoute from "./routes/PrivateRoute";
import GuestRoute from "./routes/GuestRoute";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Private from "./pages/Private";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <GuestRoute path="/register" component={Register} />
                <GuestRoute path="/login" component={Login} />
                <PrivateRoute path="/private" component={Private} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;

if (document.getElementById("app")) {
    ReactDOM.render(<Router />, document.getElementById("app"));
}
