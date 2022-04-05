import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/reviews">Reviews</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/blogs">Blogs</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
                </li>
                
            </ul>
            </div>
        </div>
        </nav>
        </div>
    );
};

export default Header;