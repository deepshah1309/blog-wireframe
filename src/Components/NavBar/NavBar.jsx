import React from 'react'
import "./navbar.scss"

function NavBar() {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li className="navbar-element"><a className="navbar-link" href="#">About Us</a></li>
                <li className="navbar-element"><a className="navbar-link" href="#">Contact Us</a></li>
                <li className="navbar-element"><a className="navbar-link" href="#">Our Work</a></li>
                <li className="navbar-element"><a className="navbar-link" href="#">Blog</a></li>
                <li className="navbar-element"><a className="navbar-link" href="#">Grow with TIS</a></li>
                <li className="navbar-element"><a className="navbar-link" href="#">FAQ</a></li>
            </ul>
        </div>
    )
}

export default NavBar
