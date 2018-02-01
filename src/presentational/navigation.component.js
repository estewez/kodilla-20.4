import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

const Navigation = props => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className='nav-item'>
                        <Link className='nav-link' to="/countries">Countries</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/continents">Continents</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Navigation;