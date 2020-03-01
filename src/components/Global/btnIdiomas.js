//Dependencias
import React, { Component }  from 'react';

import { Consumer } from "../Context";

class BtnIdiomas extends Component {
	render(){
	  	return(
		  	<Consumer>
		  		{ 	( { idioma, funcion} ) =>{
		  		return(
					<React.Fragment>
					        <li><button id={"es"} name={"es"} onClick={funcion}>ES</button></li>
					        <li><button id={"us"} name={"us"} onClick={funcion}>US</button></li>
					</React.Fragment>
		  		)}		  	
		  		} 
		  	</Consumer>
		)
	}
}

export default BtnIdiomas;