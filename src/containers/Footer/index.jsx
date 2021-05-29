import React from 'react';
import {Main} from './styles';
import {Label} from '../../components';

const Footer = () => {
    
    return(
        <Main>
            <div>Developed by Gabriel Gomes -  © Copyright 2020 </div>
            <div>
                <a href = "https://github.com/gabriels6"><i className="fab fa-github"></i></a>
                <a href = "https://www.linkedin.com/in/gabriel-souza-gomes-6ab1161b9/"><i className="fab fa-linkedin"></i></a>         
            </div>
        </Main>
    )
};


export default Footer;