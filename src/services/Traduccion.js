import React, { Component } from 'react';

import { Consumer } from "../components/Context";

export default class Home extends Component{


render(){
	return(
			<Consumer>
				{({idioma,funcion,contenido}) => {
					return(
							    <div>
							      <pre>Idioma: { contenido[idioma] } </pre>
							    </div>
					)}
				}
			</Consumer>
	)
}


}

