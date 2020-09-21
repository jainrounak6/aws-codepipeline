import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../pages';


export default function HomeRouter() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    );
}