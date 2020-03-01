import React from "react";

class Botones extends React.Component {

	cambiarIdiomaEs = (e) => {
		localStorage.setItem("idioma","es")
		this.props.onClick(e)
	}
	cambiarIdiomaUs = (e) => {
		localStorage.setItem("idioma","us")
		this.props.onClick(e)
	}

	render(){
		return(
			<div style={{padding:"20px"}}>
				<button name="es" id="es" style={{padding:"10px", margin:"20px"}} onClick={(e) => {this.cambiarIdiomaEs(e)}}>ES</button>
				<button name="us" id="us" style={{padding:"10px", margin:"20px"}} onClick={(e) => {this.cambiarIdiomaUs(e)}}>US</button>
			</div>
		)
	}
}

export default Botones;