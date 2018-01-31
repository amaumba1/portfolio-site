import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
<<<<<<< HEAD
    <header className="header">
        <h1>Portfolio</h1>
=======
    <header>
        <h1>Portfolio1</h1>
>>>>>>> 92c969b50c76c54aa159097ed1c8532f3affee25
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    </header>
);

export default Header;