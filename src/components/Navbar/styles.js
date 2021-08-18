import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export const Main = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100vw;
    height:64px;
    color:grey;
    padding: 22px 60px;
    box-sizing:border-box;
    color:black;
    font-family:'Staatliches';
`;

export const NavMenu = styled.div`
    display:flex;
    width:25%;
    justify-content:space-between;
`;

export const Logo = styled.div`
    border: 2px solid black;
    padding:15px;
    min-height:10px;
    padding-top:5px;
    margin-top:-5px;
`;

export const NavLink = styled(Link)`
    text-decoration:none;
    color:black;


    :hover{
        color:grey;
        transition: all .5s;
    }
`;

export const NavButton = styled.button`
    background:black;
    color:white;
    border:none;
    font-family:'Staatliches';
    padding:8px;
    border-radius:5px;
    margin-top:-5px;

    :hover{
        transition: all .5s;
        background:grey;
    }
`;