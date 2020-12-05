import React from 'react';
import {Main} from './styles';

const Input  = ({placeholder,type = 'text',onKeyUp,onChange}) => {

    return(
        <Main onChange = {onChange} onKeyUp = {onKeyUp} type = {type} placeholder = {placeholder}/>
    )
}

export default Input;