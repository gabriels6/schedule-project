import React,{useState,useEffect} from 'react';
import {Main} from './styles';
import {Logo,Input,Button,Control_Section,Select,Task_Card,Title_Label,Schedule_Subtitle,Info_Card,Task} from '../../components';
import axios from 'axios';
import {SwitchDate} from '../../common/utils';

const Home = ({children,UserId,Notes,setNotes}) => {

    let Title = '';
    let Date = '';
    let Content = '';
    let Urgency = '';
    const [logged,setLogged] = useState(false);
    let connection = axios.create();

    async function getNotes() {

        if(UserId !== '' && logged === false){
        

        let {data} = await connection.get(
            "https://schedule-control-api.herokuapp.com/Notes?id="+UserId+"&TOKEN="+process.env.REACT_APP_TOKEN
        )

        setLogged(true);
        setNotes(data);
        } 
        
    }

    getNotes();

    async function addNote() {

        let body = {
            Author_Id:UserId,
            Title:Title,
            Date:Date,
            Content:Content,
            Urgency:Urgency
        };

        let result = await connection.post(
            "https://schedule-control-api.herokuapp.com/Notes",
             body
        )

        console.log(result);

    }

    const handleDate = (e) =>{
        Date = SwitchDate(e.target.value);
        //console.log(Date);
    }

    const handleTitle = (e) => {
        Title = e.target.value;
        //console.log(Title);
    }

    const handleContent = (e) => {
        Content = e.target.value;
        //console.log(Content);
    }

    const handleUrgency = (e) => {
        Urgency = e.target.value;
        //console.log(Urgency);
    }

    return(
        <Main>
            <Logo/>
            <Control_Section>
                <Task_Card>
                    <Title_Label>Adicionar Tarefa</Title_Label>
                    <Input onKeyUp = {handleTitle} placeholder={'Titulo...'}/>
                    <Input onKeyUp = {handleContent} placeholder={'Descrição...'}/>
                    <Select onChange = {handleUrgency}>
                        <option value = "Invalid">Selecione uma das opções</option>
                        <option value = "Baixa">Baixa urgência</option>
                        <option value = "Media">Media urgência</option>
                        <option value = "Alta">Alta urgência</option>
                        <option value = "Imediata">Imediato</option>
                    </Select>
                    <p></p>
                    <Input onChange={handleDate} type={'date'}/>
                    <Button onClick = {() => {
                        addNote();
                        setLogged(false);
                        getNotes();
                    }}>Adicionar Tarefa</Button>
                </Task_Card>
                <Info_Card>
                    <Title_Label>Legenda</Title_Label>
                    <Schedule_Subtitle color={'#9FFF9D'} label={'Pouca Urgência'}/>
                    <Schedule_Subtitle color={'#FCFF7B'} label={'Média Urgência'}/>
                    <Schedule_Subtitle color={'#FF5151'} label={'Alta Urgência'}/>
                    <Schedule_Subtitle color={'#6036A5'} label={'Urgência Imediata'}/>
                </Info_Card>
                </Control_Section>
                {
                    Notes.length !== 0?
                        Notes.map((Note,index) => {
                            return(
                                <Task key = {index}  getNotes = {getNotes} setLogged = {setLogged} NoteId = {Note._id} urgencia = {Note.Urgency} Title={Note.Title} Date={Note.Date} Content={Note.Content} />
                            )
                        })
                        :
                        <></>
                }    
        </Main>
    )
}

export default Home;