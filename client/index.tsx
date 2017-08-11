import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./views/style.scss";

import AppRouter from './routes';

ReactDOM.render(<AppRouter />, document.getElementById("app"));