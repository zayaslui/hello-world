//dependencias
import React, { Component } from 'react';

const Config = 
							{
								data : 
											[
												{name:"nombre"}, /*agregar los inputs*/
												{name:"apellido"},
												{name:"telefono"},
												{name:"cedula"},
												{name:"nacionalidad"},									
											]
							}

class FormServices extends Component{
	constructor(){
		super()
		this.state = {
			accion:""
		}
	}
    componentWillMount(){
    	let Skeleton = {}
    	this.setState(prevState => {
    		Config.data
    							.map( (registro, index) => {
    									console.log(registro)
					    			Object.keys(registro).forEach( (campo) => {
					    				if(campo==='name'){
					    					// console.log(campo);
							    			Skeleton[campo] = "";
					    				}
					    			})
					    		})
			let state = Object.assign(this.state,Skeleton)
			return state
    	})
    	// console.log(this.state);
    }
    componentDidMount(){
		this.init();
    }
    init = () => {
		setTimeout(() => {
			this.setState(prevState => {
				let state = {}
				Config.data.map( (registro) => {
	    			Object.keys(registro).forEach( (campo) => {
	    				if(campo==='name'){
	    					// console.log(campo)
			    			state[registro[campo]] = "Nuevo Dato " +registro[campo]+" !!!!";
	    				}
	    			})
				})
				return state;
			});
	    	// console.log(this.state)
		},1000)
    }
	handleOnchange(e){	
		this.setState({
			[e.target.name] : e.target.value
		})
		console.log(JSON.stringify(this.state))
	}
	renderForm = () => {
		// console.log(this.state);
		let FormUI = Config.data.map( (registro,index) => {
			let input ="";
			let value = this.state[registro.name] || "";
			let {name} = registro
			input = (
				<input 
				type="text"
				name={name}
				key={name}
				value={value}
				onChange={(e) => {this.handleOnchange(e)}}
				/>
			)
			return(
				<div key={"FormUI "+ index}>
					{input}
				</div>
			)
		})
		return FormUI;
	}
	render(){
		return(
			<div>{this.renderForm()}</div>
		)
	}
}

export default FormServices;