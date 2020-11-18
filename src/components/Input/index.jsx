import React from 'react';
import {Main} from './styles';

const Input  = ({placeholder,type = 'text'}) => {

    return(
        <Main type = {type} placeholder = {placeholder}/>
    )
}

export default Input;