import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeLayout } from '../../layouts';

export default function MainRouter() {
    return (
        <Switch>
            <Route exact path='/' component={HomeLayout} />
        </Switch>
    );
}