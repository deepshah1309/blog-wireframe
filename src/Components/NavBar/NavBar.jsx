import React from 'react'
import "./navbar.scss"

function NavBar() {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li className="navbar-element">About Us</li>
                <li className="navbar-element">Contact Us</li>
                <li className="navbar-element">Our Work</li>
                <li className="navbar-element">Blog</li>
                <li className="navbar-element">Grow with TIS</li>
                <li className="navbar-element">FAQ</li>
            </ul>
        </div>
    )
}

export default NavBar
