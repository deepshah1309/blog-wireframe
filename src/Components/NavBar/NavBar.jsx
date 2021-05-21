import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.scss"

function NavBar() {
    return (
        <div className="navbar">
            <ul className="navbar-list">
<<<<<<< HEAD
                <li className="navbar-element"><a className="navbar-link" href="/">About Us</a></li>
                <li className="navbar-element"><a className="navbar-link" href="/">Contact Us</a></li>
                <li className="navbar-element"><a className="navbar-link" href="/">Our Work</a></li>
                <li className="navbar-element"><a className="navbar-link" href="/">Blog</a></li>
                <li className="navbar-element"><a className="navbar-link" href="/">Grow with TIS</a></li>
                <li className="navbar-element"><a className="navbar-link" href="/">FAQ</a></li>
=======
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
>>>>>>> 5b74f4ce7f190d156e0f79e88ff33f963c5aa350
            </ul>
        </div>
    )
}

export default NavBar
