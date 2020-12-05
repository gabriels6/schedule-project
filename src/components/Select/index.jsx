import React from 'react';
import {Main} from './styles';

const Select = ({children,onChange}) => (
    <Main onChange = {onChange}>
        {children}
    </Main>
);

export default Select;