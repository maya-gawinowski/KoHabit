import { Link } from "react-router-dom";
import logo from '../Assets/logo-site.svg';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";

function Header() {
    return (
        <div className="header">
            <header className="App-header">
                <Link to="/" class="logo-button" alt="Logo Ko'habit">
                    <img src={logo} alt="Logo Ko'habit" class="logo" />
                </Link>

                <div className="container-button">

                    <Link to="/petsitter" class="nav-button">
                        Our petsitters
                    </Link>

                    <Link to="/Posts" class="nav-button">
                        Posts
                    </Link>

                    <Link to="/account" class="nav-button">
                        Account
                    </Link>
                </div>



            </header>
        </div>
    )
}

export default Header;