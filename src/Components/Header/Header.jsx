import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header d-flex">
            <h3>
                <a href="#">
                    Star DB
                </a>
            </h3>
            <ul className='d-flex'>
                <li>
                    <a href="#">People</a>
                    </li>
                <li>
                    <a href="#">Planents</a>
                </li>
                <li>
                    <a href="#">Starships</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;