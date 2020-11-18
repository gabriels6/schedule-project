import React from 'react';
import {Main} from './styles';
import {Logo,Input,Button,Control_Section,Task_Card,Title_Label,Schedule_Subtitle,Info_Card,Task} from '../../components';

const Home = ({children}) => {

    return(
        <Main>
            <Logo/>
            <Control_Section>
                <Task_Card>
                    <Title_Label>Adicionar Tarefa</Title_Label>
                    <Input placeholder={'Titulo...'}/>
                    <Input placeholder={'Descrição...'}/>
                    <p></p>
                    <Input type={'date'}/>
                    <Button>Adicionar Tarefa</Button>
                </Task_Card>
                <Info_Card>
                    <Title_Label>Legenda</Title_Label>
                    <Schedule_Subtitle color={'#9FFF9D'} label={'Pouca Urgência'}/>
                    <Schedule_Subtitle color={'#FCFF7B'} label={'Média Urgência'}/>
                    <Schedule_Subtitle color={'#FF5151'} label={'Alta Urgência'}/>
                    <Schedule_Subtitle color={'#6036A5'} label={'Urgência Imediata'}/>
                </Info_Card>
                </Control_Section>
                <Task urgencia = {'Imediata'}/>      
        </Main>
    )
}

export default Home;