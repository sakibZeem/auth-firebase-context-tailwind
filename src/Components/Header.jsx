import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-300">
                <button className="btn btn-ghost text-xl">Auth-Firebase</button>
                <Link className="btn btn-ghost text-xl" to="/">Home</Link>
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-sm">Logout</button>
                        </> :
                        <>
                            <Link className="btn btn-ghost text-xl" to="/login">Login</Link>
                            <Link className="btn btn-ghost text-xl" to="/register">Register</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;