import React from 'react';
import {Main,Color_Div} from './styles';

const Schedule_Subtitle = ({color = '#000000',label = 'Label'}) => {

    return(
        <Main>
            <Color_Div color = {color}/>
            {label}
        </Main>
    )
}

export default Schedule_Subtitle;