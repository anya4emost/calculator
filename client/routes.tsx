import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './views/home';

export default () => (
    <BrowserRouter>
        <Route path='/' component={Home} />
    </BrowserRouter>
);