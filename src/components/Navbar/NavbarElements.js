import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
// import {GiHamburgerMenu} from "react-icons/gi";


export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    // top: 0;
    // left: 0;
    background: #992911;
    height: 5em;
    width: 100%;
    padding: 0 2em;
    z-index: 999;

    @media screen and (min-width: 768px){
        // border: 1px solid black;  
        // width: 80%;
        padding: 0 10em;
    }
`


export const NavLeft = styled.div`

    display: flex;
    align-items: center;
    // border: 1px solid black;
    justify-content: space-between;
    width: 100%;
    
    @media screen and (min-width: 768px){
        // border: 1px solid black;
        justify-content: flex-start;
        width: 50em;
    }


`

export const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.logo_white ? "white" : "black"}
`


export const NavMenu = styled.div`
    display: ${props => props.open ? "flex":"none"};
    position: ${props => props.open ? "absolute":"none"};
    top: 5em;
    left: 0;
    // border: 1px solid white;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: fixed;
    height: 100%;
    padding: 0 2em;
    background: #992911;
    z-index: 999;
    
    
    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 30em;
        height: auto;
        position: relative;
        top: auto;
        background: none;
        // border: 1px solid black;
    }
`


export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    // margin: ${props => props.open ? "50px 0;" : "0"};
    transition: all 0.3s ease;
    font-size: 1rem;
    
    @media screen and (min-width: 50em){
        font-size: 0.8rem;
        text-align: center;

        &.active{
            // color: #FF451C;
          }
        
        &:hover{
            color: white;
            scale: 1.1;
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

    @media screen and (min-width: 768px){
        display: block;
        padding: 15px;
        width: 100px;
        // margin: 0 18em;
        color: white;
        cursor: pointer;
        border-radius: 50px;
        border: 1px solid transparent;
        background: black;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease;

        &:hover{
            scale: 1.1;
            // background: orange;
            color: black;
        }
    }
`


export const Burger = styled.div`
    display: block;
    color: white;
    cursor: pointer;

    @media screen and (min-width: 768px){
        display: none;
    }
`

