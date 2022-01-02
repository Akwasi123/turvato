import styled from "styled-components";

export const PageSection = styled.section`
    // width: 100%;
    // padding: 5em 2em;
    height: 90vh;
    margin: auto;

    @media screen and (min-width: 50em){
        padding: 0em 8em;
        margin: auto;
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
        filter: brightness(70%);
    }
`


export const Button = styled.button`
    padding: 20px;
    color: white;
    font-size: 0.8rem;
    width: 150px;
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