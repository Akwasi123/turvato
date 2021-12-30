import React, { useState } from 'react';
import { Burger, Logo, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './NavbarElements';
import Hamburger from 'hamburger-react';
import '../../App.css';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Nav>
                <Logo>Turvato</Logo>
                <Burger>
                    <Hamburger toggled={open} toggle={setOpen}/>
                </Burger>
                <NavMenu open={open}>
                    <NavLink open={open} to='/' >
                        Home
                    </NavLink>
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
                </NavMenu>
                <NavBtn>
                    <NavBtnLink open={open} to='/signup'>Sign Up</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}

export default Navbar
