//dependencias
import React, { Component } from 'react';
import { Tab } from 'react-bootstrap';

const Sonnet = () => {
	return(
		<>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut aut amet omnis! Pariatur doloremque adipisci veritatis eos corrupti nam quo saepe itaque dolor nemo voluptatem similique facere repudiandae aspernatur, exercitationem.
		</>
	)
}

class Tabs extends Component{

	render(){
		return(
			<>
				<div>
					<button>Crear</button>
				</div>
				<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Home">
				    <Sonnet />
				  </Tab>
				  <Tab eventKey="profile" title="Profile">
				    <Sonnet />
				  </Tab>
				  <Tab eventKey="contact" title="Contact" disabled>
				    <Sonnet />
				  </Tab>
				</Tabs>
			</>
		)
	}
}

export default Tabs;