import React from 'react';
import {Main} from './styles';

const Button = ({children,onClick}) => {
    
    return(
        <Main onClick = {onClick}>
            {children}
        </Main>
    )
}

export default Button;