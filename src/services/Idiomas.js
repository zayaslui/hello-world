import React from "react";
// import Botones from "./Botones";

// import { ThemeContext } from '../index';

import BotonesHooks from "./BotonesHooks";
import BtnIdiomas from '../components/Global/btnIdiomas';
const config  = {
	"es" : "traduccion español",
	"us" : "traduccion Ingles"	
}

class Idiomas extends React.Component {
	constructor(){
		super()
		this.state = {
			config : config,
			idioma : localStorage.getItem("idioma")
		}		
	}
	idioma = () => {
		if(!localStorage.getItem("idioma")){
			localStorage.setItem("idioma","es")
		}
		this.setState({
			idioma : localStorage.getItem("idioma")
		})
	}
	componentDidMount(){
		//inicializar el idioma
		this.idioma()
	}
	onClick = (event) => {
		let idioma=event.target.id
		this.setState({
			idioma:idioma
		})
		localStorage.setItem("idioma",idioma);
	}
	
	// static contextType = ThemeContext;

	render(){
		return(
			<div>
				<div>{localStorage.getItem("idioma")}</div>
				{/*<BtnIdiomas onClick={(e) => {this.onClick(e)}}/>*/}
				{/*<div style={{padding:"20px"}}>{JSON.stringify(this.state.config[this.state.idioma])}</div>*/}
				{/*<Botones onClick={(e) => {this.onClick(e)}} />*/}
				<BotonesHooks onClick={(e) => {this.onClick(e)}}/>
			</div>
		)
	}
}

export default Idiomas;