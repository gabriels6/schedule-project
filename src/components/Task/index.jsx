import React from 'react';
import {Title_Label,Label} from '../../components';
import {Main} from './styles';

const Task = ({urgencia = 'Baixa'}) => {
    
    let color = '';

    if(urgencia === 'Imediata') color = '#6036A5';
    if(urgencia === 'Alta') color = '#FF5151';
    if(urgencia === 'Media') color = '#FCFF7B';
    if(urgencia === 'Baixa') color = '#9FFF9D';

    return(
        <Main color = {color}>
            <Title_Label>Titulo da Tarefa</Title_Label>
            <Label>00/00/0000</Label>
            <Label>Linha que descreve a tarefa</Label>
            <Label>00:00</Label>
        </Main>
    )
}

export default Task;