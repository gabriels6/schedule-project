import React from 'react';
import { useHistory } from 'react-router-dom';
import {Main} from './styles';
import {Logo,Task_Card,Title_Label,Input,Button,Control_Section} from '../../components';
import axios from 'axios';

const SignUp = () => {

    const history = useHistory();

    let Username = '';
    let Pass = '';
    let ConfirmPass = '';

    async function handleSignUp(){

        if(Pass !== ConfirmPass){
            alert("As Senhas não conferem");
            return;
        }

        let connection = await axios.create();

        let body = {
            Username:Username,
            Password:Pass
        }

        let User = await connection.post(
            process.env.API_URL+"/User/Create",
            body
        );

        returnLogin();
    }

    const handleUsername = (e) => {
        Username = e.target.value;
    }

    const handlePass = (e) => {
        Pass = e.target.value;
    }

    const handleConfirmPass = (e) => {
        ConfirmPass = e.target.value;
    }

    const returnLogin = () => {
        history.push("/Login");
    }

    return(
        <Main>
            <Logo/>
            <Task_Card>
                <Title_Label>Cadastro</Title_Label>
                <Input type="text" onKeyUp = {handleUsername} placeholder="Nome de usuário"/>
                <Input type="password" onKeyUp = {handlePass} placeholder="Senha..."/>
                <Input type="password" onKeyUp = {handleConfirmPass} placeholder="Confirma senha..."/>
                <Button onClick={handleSignUp}>Cadastrar</Button>
                <Button onClick={returnLogin}>Retornar</Button>
            </Task_Card>
        </Main>
    )
}

export default SignUp;