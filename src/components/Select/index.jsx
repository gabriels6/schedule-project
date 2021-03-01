import React from 'react';
import {Main} from './styles';

const Select = ({children,onChange,id}) => (
    <Main id = {id} onChange = {onChange}>
        {children}
    </Main>
);

export default Select;