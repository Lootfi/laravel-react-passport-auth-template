import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [auth, setAuth] = React.useState(false);
    const [isTokenValidated, setIsTokenValidated] = React.useState(false);

    React.useEffect(() => {
        let token = localStorage.getItem("access_token");
        if (token) {
            axios
                .post("/api/check-auth")
                .then(res => {
                    if (res.data.success) {
                        setAuth(true);
                    }
                })
                .catch(err => {
                    setAuth(false);
                    localStorage.removeItem("access_token");
                })
                .then(() => setIsTokenValidated(true));
        } else {
            setIsTokenValidated(true); // in case there is no token
        }
    }, []);

    if (!isTokenValidated) return <h1>waiting..</h1>; // or some kind of loading animation

    return (
        <Route
            {...rest}
            render={props => {
                return auth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                );
            }}
        />
    );
};

export default PrivateRoute;
