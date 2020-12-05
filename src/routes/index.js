import React,{useState} from 'react';
import Login from '../containers/Login';
import Home from '../containers/Home';
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
                <Home UserId={UserId} Notes={Notes} setNotes={setNotes}></Home>
            </Route>
        </Switch>
    )
}

export default SwitchControl;