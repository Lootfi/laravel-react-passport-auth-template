import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [fields, setFields] = React.useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    let handleInputChange = e => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    };

    let handleSubmit = () => {
        axios
            .post("/api/register", fields)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Register</h1>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <hr />
            <form onSubmit={handleSubmit}>
                <label for="email">
                    email
                    <input
                        name="email"
                        type="email"
                        value={fields.email}
                        onChange={e => handleInputChange(e)}
                    />
                </label>
                <label for="username">
                    username
                    <input
                        name="username"
                        type="text"
                        value={fields.username}
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
                <label>
                    confirm password
                    <input
                        name="confirm password"
                        type="password"
                        value={fields.confirmPassword}
                        onChange={handleInputChange}
                    />
                </label>
                <input type="submit" value="REGISTER" />
            </form>
        </div>
    );
}
