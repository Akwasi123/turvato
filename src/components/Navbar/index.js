import React, { useState } from 'react';
import { Burger, Logo, Nav, NavLeft, NavBtn, NavBtnLink, NavLink, NavMenu } from './NavbarElements';
import Hamburger from 'hamburger-react';
import '../../App.css';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Nav>
                <NavLeft>
                    <NavLink to='/'>
                        <Logo logo_white>Turvato</Logo>
                    </NavLink>
                    <Burger>
                        <Hamburger size={20} toggled={open} toggle={setOpen}/>
                    </Burger>
                    <NavMenu open={open}>
                        <div className="navMen-container">
                            <NavLink open={open} to='/blog' >
                                Blog
                            </NavLink>
                            <NavLink open={open} to='/prem' >
                                Premium Themes
                            </NavLink>
                            <NavLink open={open} to='/free' >
                                Free Themes
                            </NavLink>
                            <NavLink open={open} to='/webtemp' >
                                Website Templates
                            </NavLink>
                        </div>
                        
                    </NavMenu>
                </NavLeft>
                <NavBtn>
                    <NavBtnLink open={open} to='/signup'>Sign Up</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}

export default Navbar
