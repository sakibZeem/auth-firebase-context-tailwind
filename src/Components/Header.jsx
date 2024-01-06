import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-300">
                <button className="btn btn-ghost text-xl">Auth-Firebase</button>
                <Link className="btn btn-ghost text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost text-xl" to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Header;