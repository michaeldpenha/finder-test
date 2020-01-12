import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from '../../pages/home';
import User from '../../pages/user';

const renderHome = () => {
    return <Redirect to={'/'}/>
}

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/user/:username' exact={true} component={User}/>
            <Route path="*" render = {renderHome} /> 
        </Switch>
    )
}

export default Routes;