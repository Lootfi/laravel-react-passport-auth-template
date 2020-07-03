import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [fields, setFields] = React.useState({ email: "", password: "" });

    let handleInputChange = e => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    };

    let handleSubmit = e => {
        e.preventDefault();
        axios
            .post("/api/login", fields)
            .then(res => localStorage.setItem("access_token", res.data.token))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <Link to="/register">Register</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/private">Private</Link>
            </div>
            <hr />

            <form onSubmit={handleSubmit}>
                <label>
                    email
                    <input
                        name="email"
                        type="email"
                        value={fields.email}
                        onChange={e => handleInputChange(e)}
                    />
                </label>
                <label>
                    password
                    <input
                        name="password"
                        type="password"
                        value={fields.password}
                        onChange={handleInputChange}
                    />
                </label>
                <input type="submit" value="LOGIN" />
            </form>
        </div>
    );
}
