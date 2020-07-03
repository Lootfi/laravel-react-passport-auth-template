import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/register">Register</Link>
            </div>
            <div>
                <Link to="/private">Private</Link>
            </div>
        </div>
    );
}
