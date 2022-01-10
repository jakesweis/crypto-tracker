import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to='/'>
                    <img src={require('../../images/logo.png')} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/watchlists' activestyle>
                        Watchlists
                    </NavLink>
                    <NavLink to='/settings' activestyle>
                        Settings
                    </NavLink>
                    <NavLink to='/sign-up' activestyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='sign-in'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}

export default Navbar
