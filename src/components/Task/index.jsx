import React from 'react';
import {Title_Label,Label,Button} from '../../components';
import {Main} from './styles';
import axios from 'axios';
import api from '../../utils/api';
import { DifferenceOfTime, FormatDateAndTime } from '../../common/utils';

const Task = ({urgencia = 'Baixa',Title="Titulo",Content="Conteudo",Date="00/00/0000",NoteId,getNotes,setLogged, StartTaskTime, EndTaskTime}) => {
    
    let color = '';
    let urgencies = {
        'Imediata': '#6036A5',
        'Alta':     '#FF5151',
        'Media':    '#FCFF7B',
        'Baixa':    '#9FFF9D'
    }

    color = urgencies[urgencia];

    async function  removeNote(){

        let response = await api.delete("/Note?_id="+NoteId+"&TOKEN="+process.env.REACT_APP_TOKEN,{});

        console.log(response);
        setLogged(false);
        getNotes();
    }

    async function startTask(event) {
        await api.put("/Notes",{_id: event.target.id, StartTaskTime: (new window.Date()).toISOString()});
        setLogged(false);
        getNotes();
    }

    async function endTask(event) {
        await api.put("/Notes",{_id: event.target.id, EndTaskTime: (new window.Date()).toISOString()});
        setLogged(false);
        getNotes();
    }

    return(
        <Main color = {color}>
            <Title_Label>{Title}</Title_Label>
            <Label>{Date}</Label>
            <Label>{Content}</Label>
            { StartTaskTime == "" ? <Button id = {NoteId} onClick={startTask}>Start Task</Button> : (
                <>
                    <Label>Iniciado em: {FormatDateAndTime(StartTaskTime)}  </Label>
                    <Label></Label>
                    { EndTaskTime == "" ? <Button id = {NoteId} onClick={endTask}>End Task</Button> : (
                        <>
                            <Label>Finalizado em: {FormatDateAndTime(EndTaskTime)} </Label>
                            <Label>Tempo Gasto: {DifferenceOfTime(StartTaskTime, EndTaskTime)}</Label>
                        </>
                    ) }
                </>
            ) }
            <Label></Label>
            <Button onClick={removeNote}>Remover Nota</Button>
        </Main>
    )
}

export default Task;