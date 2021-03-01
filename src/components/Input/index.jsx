import React from 'react';
import {Main} from './styles';

const Input  = ({placeholder,type = 'text',onKeyUp,onChange,id}) => {

    return(
        <Main id={id} onChange = {onChange} onKeyUp = {onKeyUp} type = {type} placeholder = {placeholder}/>
    )
}

export default Input;