import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerNav.css'


let navItems = [
    {
        name: 'home',
        to: '#'
    },
    {
        name: 'service',
        to: '#'
    },
    {
        name: 'about',
        to: '#'
    },
    {
        name: 'pages',
        to: '#'
    },
    {
        name: 'blocks',
        to: '#'
    },
    {
        name: 'contact',
        to: '#'
    },
];

navItems = navItems.map(({ name, to }, i) => {
    return (
        <li key={i}>
            <NavLink to={to}>
                {name}
            </NavLink>
        </li>
    )
})

export default function HeaderNav() {
    return (
        <nav>
            <ul>
                {navItems}
            </ul>
        </nav>
    );
}

