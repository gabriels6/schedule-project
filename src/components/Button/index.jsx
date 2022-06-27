import React from 'react';
import {Main} from './styles';

const Button = ({children,onClick,id}) => {
    
    return(
        <Main onClick = {onClick} id={id}>
            {children}
        </Main>
    )
}

export default Button;