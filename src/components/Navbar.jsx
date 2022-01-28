import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-dark bg-info mb-3">
                <NavLink className="navbar-brand text-center" to="/">
                    <FontAwesomeIcon icon={faHome}/>
                </NavLink>
            </nav>           
        </div>
    )
}

export default Navbar
