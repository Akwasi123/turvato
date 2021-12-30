import styled, {css} from "styled-components";
import { NavLink as Link } from "react-router-dom";
// import {GiHamburgerMenu} from "react-icons/gi";


export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    height: 5em;
    width: 100%;
    padding: 0 2em;

    @media screen and (min-width: 50em){
        // border: 1px solid black;  
        padding: 0 10em;
    }
`

export const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
`


export const NavMenu = styled.div`
    display: ${props => props.open ? "flex":"none"};
    position: ${props => props.open ? "absolute":"none"};
    top: 5em;
    left: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    // border: 1px solid black;
    width: 100%;
    padding: 0 2em;
    background: red;
    
    
    @media screen and (min-width: 50em){
        display: flex;
        flex-direction: row;
        width: 40em;
        position: relative;
        top: auto;
        background: none;
    }
`


export const NavLink = styled(Link)`
    color: #000;
    text-decoration: none;
    margin: ${props => props.open ? "20px 0;" : "0"};

    
    @media screen and (min-width: 50em){
        &.active{
            color: red;
          }
        
        &:hover{
            color: green;
        }

    }
`

export const NavBtnLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 0.8rem;
`

export const NavBtn = styled.button`
    display: none;
    

    @media screen and (min-width: 50em){
        display: block;
        padding: 15px 20px;
        color: white;
        cursor: pointer;
        border-radius: 50px;
        border: 1px solid black;
        background: black;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease;

        &:hover{
            scale: 1.1;
            background: orange;
        }
    }
`


export const Burger = styled.div`
    display: block;
    // color: black;
    cursor: pointer;

    @media screen and (min-width: 50em){
        display: none;
    }
`

