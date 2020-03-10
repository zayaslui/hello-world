import React, { Component } from 'react';
// import ReactCountryFlag from "react-country-flag";

// import Calendar from '../../services/Calendar';
// import AutoComplete from '../../services/AutoComplete';
//import Count from '../Global/Count';
// import FormServices from '../../services/FormServices';
// import Idiomas from '../../services/Idiomas';
// import Scroll from '../Global/Scroll';
// import Traduccion from '../../services/Traduccion';
import Tabs from '../../services/Tabs';

class Home extends Component{

	render(){
		return(
			<div className='Home'>
				<h1>Home Page</h1>
				<Tabs />
			</div>
		);
	}
}

export default Home;