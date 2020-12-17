import React from 'react';
import '../css/navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><img className="navbar__logo" src="https://www.flaticon.com/svg/static/icons/svg/3039/3039381.svg" /></Link>
            <span className="navbar__brand">MoviesAndSeriesInfo</span>
        </div>
    )
}

export default Navbar
