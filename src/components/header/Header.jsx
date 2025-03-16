import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Fabar from "../../assets/hamburger.svg"

const Header = () => {
    // Toogle Menu
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    };

    // fixed Header
    window.addEventListener("scroll", function () {
        const navbab_wrapper = document.querySelector(".navbab-wrapper");
        navbab_wrapper.classList.toggle("active", window.scrollY >= 1);
    });

    return (
        <div className="navbab-wrapper">
            <div className="container-fluid">
                <nav className="navbar">
                    <div className="brand d-flex align-items-center gap-2">
                        <div className="mobile-nav-toggler" onClick={ToggleSidebar}>
                            <img src={Fabar} alt="bar" className="w-auto h-auto" />
                        </div>
                        <div className="brand-logo">
                            <Link to="/">
                                <h5>Abdul Mannan</h5>
                            </Link>
                        </div>
                    </div>
                    <div className={`navbar-menu ${isOpen === true ? "active" : ""}`}>
                        {/* <Link to="/" className='profileName'>
                            <h6>Md Abdul Mannan</h6>
                        </Link> */}
                        <ul
                            className="navbar-nav flex-row gap-3"
                            id="navbar-nav"
                            onClick={ToggleSidebar}
                        >
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/media">
                                    Media
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/product">
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div
                        className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
                        onClick={ToggleSidebar}
                    ></div>
                </nav>
            </div>
        </div>
    );
};

export default Header