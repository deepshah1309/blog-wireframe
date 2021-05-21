import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.scss"

function NavBar() {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li className="navbar-element">
                    <Link to="/about" className="navbar-link">About</Link>
                </li>
                <li className="navbar-element">
                    <Link to="/contact" className="navbar-link">Contact us</Link>
                </li>
                <li className="navbar-element">
                    <Link to="/work" className="navbar-link">Our Work</Link>
                </li>
                <li className="navbar-element">
                    <Link to="/blog" className="navbar-link">Blog</Link>
                </li>
                <li className="navbar-element">
                    <Link to="/grow" className="navbar-link">Grow with Us</Link>
                </li>
                <li className="navbar-element">
                    <Link to="/faq" className="navbar-link">FAQ</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
