import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button, Flex } from '../styled-components';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="nav-container">
                <div className="nav-left">
                    <h2>Turvato</h2>

                    {/* navigation links */}
                    <nav>
                        <ul>
                            <Link className='link' to="" >Blog</Link>
                            <Link className='link' to="" >Premium Themes</Link>
                            <Link className='link' to="" >Free Themes</Link>
                            <Link className='link' to="" >Website Templates</Link>
                        </ul>
                    </nav>
                </div>

                <div className="nav-right">
                    <Button>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
