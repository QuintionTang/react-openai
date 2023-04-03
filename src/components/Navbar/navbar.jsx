/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../libs/navbar";

const Navbar = ({ lr, nr, theme }) => {
    return (
        <nav
            ref={nr}
            className={`navbar navbar-expand-lg change ${
                theme === "themeL" ? "light" : ""
            }`}
        >
            <div className="container">
                <Link href="/" className="logo">
                    {theme ? (
                        theme === "themeL" ? (
                            <img ref={lr} src={appData.darkLogo} alt="logo" />
                        ) : (
                            <img ref={lr} src={appData.lightLogo} alt="logo" />
                        )
                    ) : (
                        <img ref={lr} src={appData.lightLogo} alt="logo" />
                    )}
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleMobileDropdown}
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="icon-bar">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                href={`/about/about-dark`}
                                className="nav-link"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href={`/about/about-dark`}
                                className="nav-link"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
