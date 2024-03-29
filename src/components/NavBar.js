import React from "react";
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <img src="./logo192.png" alt="" width={40} height={38} style={{ margin: "0px 5px 0px 5px" }} />
                    <Link className="navbar-brand" to="/">
                        NewsBoy
                    </Link >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">
                                    Business
                                </Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">
                                    Entertainment
                                </Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">
                                    Health
                                </Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">
                                    Science
                                </Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">
                                    Sports
                                </Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">
                                    Technology
                                </Link >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
