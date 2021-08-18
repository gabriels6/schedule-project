import React,{useState} from 'react';
import {Logo,Info_Card,Title_Label,Input,Button,Control_Section} from '../../components';
import {Main} from './styles';
import {saveUser} from '../../store/actions/user';
import {connect} from 'react-redux';
import { Redirect,useHistory } from 'react-router-dom'; 
import axios from 'axios';

const Login = ({saveUser,UserId,setUserId,user,Notes,setNotes}) => {

    const history = useHistory();

    const [Username,setUsername] = useState('');
    const [Pass,setPass] = useState('');

    const handleAddUser = () => {
        saveUser(Username);
    }

    const handleChangeUser = (e) => {
        setUsername(e.target.value);
    }

    const handleChangePass = (e) => {
        setPass(e.target.value);
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

        if(typeof User.data._id != 'undefined'){
            setUserId(User.data._id);
            saveUser(User.data.Username,User.data._id);
        }
        else alert(User.data.Error)
    }

    
    

    const SignUp = () => {
        history.push("/SignUp");
    }

    return(
        user != null && user.User_id ?
            <Redirect to = "Schedule"/>
        :
            <Main>
            <Logo/>
                <Info_Card>
                        <Title_Label>Autenticar usuário</Title_Label>
                        <Input onChange={handleChangeUser} value={Username} placeholder={'Nome de Usuário...'}/>
                        <Input onChange={handleChangePass} value={Pass} type = "password" placeholder={'Senha...'}/>
                        <Button onClick={handleLogin}>LOG IN</Button>
                        <Button onClick={SignUp}>SIGN UP</Button>
                </Info_Card> 
            </Main> 
    )
}

const mapStateToProps = (state) => ({
    user: state.users.user
})


export default connect(mapStateToProps,{saveUser})(Login);