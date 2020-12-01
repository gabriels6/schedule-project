import React from 'react';
import {Logo,Task_Card,Title_Label,Input,Button} from '../../components';
import {Main} from './styles';

const Login = () => {

    return(
        <Main>
            <Logo/>
            <Task_Card>
                    <Title_Label>Adicionar Tarefa</Title_Label>
                    <Input placeholder={'Nome de Usuário...'}/>
                    <Input type = "password" placeholder={'Senha...'}/>
                    <Button>Adicionar Tarefa</Button>
            </Task_Card>
        </Main>
    )
}

export default Login;