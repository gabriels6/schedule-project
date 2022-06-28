import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Control_Section, Input, Task_Card, Title_Label } from "../../components";
import { LogSection, Main } from "./styles";
import moment from "moment";
import { FormatDateAndTime } from "../../common/utils";

const TaskLog = ({UserId, taskLogs = [], setTaskLogs}) => {

    const [description, setDescription] = useState('');
    const [logged,setLogged] = useState(false);
    let connection = axios.create();

    useEffect(() => {
        getTaskLogs();
    })

    function handleDescription(event) {
        setDescription(event.target.value);
        console.log(description)
    }

    async function getTaskLogs(){

        if(UserId !== '' && logged === false){
            let {data} = await connection.get(
                "https://schedule-control-api.herokuapp.com/TaskLogs?User_id="+UserId+"&TOKEN="+process.env.REACT_APP_TOKEN
            )
            setLogged(true);
            setTaskLogs(data);
        }
    }

    async function createTaskLog(){
        let body = {
            User_id:UserId,
            Description:description,
            Timestamp:moment().format()
        };

        

        let result = await connection.post(
            "https://schedule-control-api.herokuapp.com/TaskLogs",
             body
        )

        setLogged(false);
        getTaskLogs();
    }

    async function deleteTaskLog(event){
        let id = event.currentTarget.id
        await connection.delete("https://schedule-control-api.herokuapp.com/TaskLogs",{
            params: {
                _id: id,
                TOKEN: process.env.REACT_APP_TOKEN
            }
        })
        setLogged(false);
        getTaskLogs();
    }

    return (
        <Main>
            <Control_Section>
                <Task_Card>
                    <Title_Label>Adicionar Log de Tarefa</Title_Label>
                    <Input id='InputTitle' onChange={handleDescription} placeholder={'Descrição...'}/>
                    <Button onClick={createTaskLog}>Criar Log</Button>
                </Task_Card>
            </Control_Section>
            {
                taskLogs.length !== 0?
                    taskLogs.map((Log, index) => (
                        <Card key={index}>
                            <h1>{FormatDateAndTime(Log.Timestamp)}</h1>
                            <LogSection>
                                <p>{Log.Description}</p>
                                <Button onClick={deleteTaskLog} id={Log._id}>
                                    Delete
                                </Button>
                            </LogSection>
                        </Card>
                    )) : ''
            }
        </Main>
    )
}

export default TaskLog;