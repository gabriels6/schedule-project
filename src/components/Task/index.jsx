import React from 'react';
import {Title_Label,Label,Button} from '../../components';
import {Main} from './styles';
import axios from 'axios';

const Task = ({urgencia = 'Baixa',Title="Titulo",Content="Conteudo",Date="00/00/0000",NoteId,getNotes,setLogged}) => {
    
    let color = '';

    async function  removeNote(){
        let connection = axios.create();

        let response = await connection.delete(process.env.API_URL+"/Note?_id="+NoteId+"&TOKEN="+process.env.REACT_APP_TOKEN);

        console.log(response);
        setLogged(false);
        getNotes();
    }

    if(urgencia === 'Imediata') color = '#6036A5';
    if(urgencia === 'Alta') color = '#FF5151';
    if(urgencia === 'Media') color = '#FCFF7B';
    if(urgencia === 'Baixa') color = '#9FFF9D';

    return(
        <Main color = {color}>
            <Title_Label>{Title}</Title_Label>
            <Label>{Date}</Label>
            <Label>{Content}</Label>
            <Button onClick={removeNote}>Remover Nota</Button>
        </Main>
    )
}

export default Task;