import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function GuestRoute({ component: Component, ...rest }) {
    if (!localStorage.getItem("access_token")) {
        return <Route {...rest} render={props => <Component {...props} />} />;
    } else {
        return <Redirect to="/" />;
    }
}
