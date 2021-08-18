import React from 'react';
import {Main} from './styles';

const Input  = ({placeholder,value, type = 'text',onKeyUp,onChange,id}) => {

    return(
        <Main id={id} onChange = {onChange} value = {value} onKeyUp = {onKeyUp} type = {type} placeholder = {placeholder}/>
    )
}

export default Input;