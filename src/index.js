import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import App from './components/App';
import * as serviceWorker from './serviceWorker';
//routes
import AppRoutes from './routes';

//context
// import Context  from './components/Context';


//Assets
import './index.css';

render(
	<Router>
			<AppRoutes />
	</Router>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
