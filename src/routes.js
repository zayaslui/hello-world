import React from 'react';
import { Switch, Route } from "react-router-dom";
//componentes
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = (props) =>(

	<App>
			<Switch>
				<Route exact path={ "/about"} component={About}/>
				<Route exact path={ "/contact"} component={Contact}/>
				<Route exact path={ "/"} component={Home}/>
				<Route component={Page404}/>
			</Switch>
	</App>
)

export default AppRoutes;