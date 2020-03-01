import React, { Component } from 'react';
import axios from 'axios';
import { css } from '@emotion/core';
// import ClipLoader from 'react-spinners/ClipLoader';
import { ClipLoader,CircleLoader,PropagateLoader,ScaleLoader } from 'react-spinners';

const override = css`
		    display: block;
		    margin: 0 auto;
		    border-color: red;
		`;

class About extends Component {
	constructor(){
		super()
		this.state = {
			data:[],
			loading:true
		}

	}
	
	 getData = (modelo) => {
		let url = 'http://localhost:8080/backapp/rest/crudservice/list/usuario/10';
		let auth = 
	 						{
						  headers: {
						  					 'JWT':'12345'
											},
						};	
		return axios
				.get(url,auth)
				.then(response =>{
					console.log(JSON.stringify(response,null,"  "));
				})
				.catch(err => {
					console.log(err);
				})
	}
	
	render(){		
		return(
			<div className='About'>
				<div>
						<div className='sweet-loading'>
						    <ClipLoader
						      css={override}
						      sizeUnit={"px"}
						      size={50}
						      color={'#123abc'}
						      loading={this.state.loading}
						    />
						</div>
						<div className='sweet-loading'>
							<CircleLoader
							  css={override}
							  sizeUnit={"px"}
							  size={50}
							  color={'#123abc'}
							  loading={this.state.loading}
							/>
						</div> 			
						<div className='sweet-loading'>
							<PropagateLoader
							  css={override}
							  sizeUnit={"px"}
							  size={10}
							  color={'#123abc'}
							  loading={this.state.loading}
							/>
						</div>
						<div className='sweet-loading'>									      	
							<ScaleLoader
							  css={override}
							  sizeUnit={"px"}
							  size={10}
							  color={'#123abc'}
							  loading={this.state.loading}
							/>
						</div> 	
				</div>
				<button onClick={this.getData}>enviar</button>
			</div>
		);
	}
}

export default About;