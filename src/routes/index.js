import React,{useState} from 'react';
import {Login,Home,SignUp,DailyReview} from '../containers';
import {Navbar} from '../components';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const SwitchControl = () => {

    const [UserId,setUserId] = useState('');
    const [Notes,setNotes] = useState([]);


    return(
        <Switch>
            <Route path = "/Login">
                <Login UserId={UserId} setUserId={setUserId} Notes={Notes} setNotes={setNotes}></Login>
            </Route>
            <Route path = "/Schedule">
                <Navbar/>
                <Home UserId={UserId} Notes={Notes} setNotes={setNotes}></Home>
            </Route>
            <Route path = "/DR">
                <Navbar/>
                <DailyReview/>
            </Route>
            <Route path = '/SignUp'>
                <SignUp></SignUp>
            </Route>
        </Switch>
    )
}

export default SwitchControl;