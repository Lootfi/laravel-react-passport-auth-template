import React from "react";
import { Link } from "react-router-dom";

export default function Private() {
    return (
        <div>
            <h1>Private</h1>
            <div>
                <Link to="/register">Register</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <hr />
        </div>
    );
}
