import styled from "styled-components";

export const PageSection = styled.section`
    width: 100%;
    padding: 5em 2em;
    height: auto;
    margin: auto;
    // border: 1px solid red;

    @media screen and (min-width: 50em){
        padding: 0em 10em;
        margin: auto;
        // height: 100vh;
        // border: 1px solid white;
    
    }



`


export const BGImg = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: -999;
    // border: 5px solid red;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(60%);
    }
`


export const Button = styled.button`
    padding: 15px 20px;

    color: white;
    font-size: 0.8rem;
    width: 120px;
    border-radius: 50px;
    background: #FF451C;
    border: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: scale 0.3s ease;
    // z-index: 999;

    &:hover{
        scale: 1.1;
    }
`


export const Footer = styled.footer`
    margin-top: 5em;
    padding: 20px 0;
    width: 100%;
    height: 7em;
    background: #AE1E1A;

`