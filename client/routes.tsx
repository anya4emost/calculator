import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Calculator from './views/calculator';
import {Switch} from "react-router";

export default class Routes extends React.Component<{}, {}> {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Calculator}/>
                </Switch>
            </BrowserRouter>
        )
    }
}