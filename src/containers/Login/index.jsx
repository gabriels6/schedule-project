import React,{useState} from 'react';
import {Logo,Info_Card,Title_Label,Input,Button,Control_Section} from '../../components';
import {Main} from './styles';
import {saveUser} from '../../store/actions/user';
import {connect} from 'react-redux';
import { Redirect,useHistory } from 'react-router-dom'; 
import axios from 'axios';

const Login = ({saveUser,UserId,setUserId,Notes,setNotes}) => {

    const history = useHistory();

    let Username = '';
    let Pass = '';

    const handleAddUser = () => {
        saveUser(Username);
    }

    const handleChangeUser = (e) => {
        Username = e.target.value;
    }

    const handleChangePass = (e) => {
        Pass = e.target.value;
    }

    async function handleLogin(){
        let connection = axios.create();

        if(Username === '' || Username === ' '){
            alert("Preencha todos os campos");
            return;
        }
        if(Pass === '' || Pass === ' '){
            alert("Preencha todos os campos");
            return;
        }

        let body = {
            Username:Username,
            Password:Pass
        }

        let User = await connection.post(
            "https://schedule-control-api.herokuapp.com/User",
            body
        );

        if(typeof User.data._id != 'undefined') setUserId(User.data._id);
        else alert(User.data.Error)
        


        
    
    }

    

    const SignUp = () => {
        history.push("/SignUp");
    }

    return(
        UserId !== '' && typeof UserId !== undefined?
            <Redirect to = "Schedule"/>
        :
            <Main>
            <Logo/>
                <Info_Card>
                        <Title_Label>Autenticar usuário</Title_Label>
                        <Input onKeyUp={handleChangeUser} placeholder={'Nome de Usuário...'}/>
                        <Input onKeyUp={handleChangePass} type = "password" placeholder={'Senha...'}/>
                        <Button onClick={handleLogin}>LOG IN</Button>
                        <Button onClick={SignUp}>SIGN UP</Button>
                </Info_Card> 
            </Main> 
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})


export default connect(mapStateToProps,{saveUser})(Login);