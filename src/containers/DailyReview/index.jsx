import React, {useState,useEffect} from 'react';
import {Logo,Input,Button,Control_Section,Task_Card,Select,Card,Title_Label,Schedule_Subtitle,Info_Card,Task} from '../../components';
import {connect} from 'react-redux';
import {Main} from './styles';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {saveDailyReviews} from '../../store/actions/daily-reviews';
import { CreateDate } from '../../common/utils';

const DailyReview = ({user,saveDailyReviews,DailyReviews}) => {

    let connection = axios.create();

    let history = useHistory();

    useEffect(async () => {
        if(user == null) history.push('/');

        if(user.User_id !== ''){
        

            let {data} = await connection.get(
                process.env.API_URL+"/DR?id="+user.User_id+"&TOKEN="+process.env.REACT_APP_TOKEN
            )
    
            saveDailyReviews(data);
            console.log(DailyReviews);
        } 
    },[]);

    const [pros, setPros] = useState('');
    const [cons, setCons] = useState('');
    const [date, setDate] = useState('');

    function handlePros(event){
        setPros(event.target.value);
    }

    function handleCons(event){
        setCons(event.target.value);
    }

    async function sendReview(){

        let finalReview = "Pontos Positivos: " + pros + " \n \n pontos Negativos: " + cons + "\n"

        let body = {
            Author_Id:user.User_id,
            Date:date,
            Review:finalReview
        };

        await connection.post(
            process.env.API_URL+"/DR?TOKEN="+process.env.TOKEN,
             body
        );

    }
    
    const handleDate = (e) =>{
        setDate(CreateDate(e.target.value));

        //console.log(Date);
    }

    return(
        <Main>
             <Control_Section>
                <Task_Card>
                    <Title_Label>Adicionar Revisão Diária</Title_Label>
                    <Input id = {'InputReview'} value={cons} onChange={handleCons} placeholder={'Pontos Negativos...'}/>
                    <p></p>
                    <Input id = {'InputReview'} value={pros} onChange={handlePros} placeholder={'Pontos Positivos...'}/>
                    <p></p>
                    <Input id = {'InputDate'} onChange={handleDate} type={'date'}/>
                    <Button onClick = {() => {
                        sendReview()
                    }}>Adicionar Tarefa</Button>
                </Task_Card>
                </Control_Section>
                {
                DailyReviews.length > 0 ?
                    DailyReviews.map((dailyReview,index) => {
                        return (
                            <Card key={index}>
                                <h1>{dailyReview.Date}</h1>
                                <p>{dailyReview.Review}</p>
                            </Card>
                        )
                    }) : ''
            }
        </Main>
    )
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    DailyReviews: state.dailyReviews.DailyReviews
});

export default connect(mapStateToProps,{saveDailyReviews})(DailyReview);
