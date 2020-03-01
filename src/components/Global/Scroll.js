//dependencias
import React, { Component } from 'react';
// Importamos el componente
import { animateScroll as scroll, Element, scroller} from "react-scroll";

export default class Scroll extends Component{

	// Desplamiento hasta el borde inferior de la página
	onClickDown = () => {
	   scroll.scrollToBottom();
	}
	// Desplamiento hasta el borde superior de la página
	onClickUp = () => {
	   scroll.scrollToTop();
	}
	onClickParrafo1 = () => {
		scroller.scrollTo("parrafo1");
	}
	onClickParrafo2 = () => {
		scroller.scrollTo("parrafo2");
	}	

	// Con esta función nos desplazamos hasta dejar el borde superior de la página ubicado en la ubicación 200px, contando desde arriba (es necesario que la página tenga scroll visible para que funcione)
	//scroll.scrollTo(200);

	render(){
		return(
			<div>
			<button className="up" onClick={(e) =>{this.onClickUp()}}>Subir</button>
			<button className="down" onClick={(e) => {this.onClickDown()}}>Abajo</button>
			<Element name="parrafo1">
				<h1>Contenido 1</h1>
				<p style={{padding:"5% 10%"}}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta fuga quas est nihil praesentium numquam necessitatibus delectus dolorum atque, officiis eveniet molestiae enim maxime nemo id facilis temporibus distinctio ex consequatur. Aperiam ipsum voluptatum quam ratione, mollitia qui tempora, animi nihil inventore aliquam esse minus ea iusto consequuntur et. Non pariatur aliquid ea suscipit iusto maiores nulla commodi quidem odio voluptatem mollitia assumenda quaerat eligendi officiis velit voluptate cumque, quasi sit numquam quod! Sapiente veniam ad, harum, reiciendis facilis nemo quas quidem voluptate quae similique. Voluptas atque quidem labore tempore. Corporis quaerat sed iste perspiciatis molestias illum atque veritatis modi iure, quidem rerum nemo unde quod ratione saepe, cum pariatur perferendis, in laudantium excepturi nihil. Rerum perferendis molestias, numquam nisi delectus quaerat harum. Iusto labore sapiente alias repudiandae dolorum sint neque, cum harum voluptas nihil voluptates optio illo earum. Possimus vero quisquam, iure illo molestias porro sint eligendi esse assumenda, tempore dicta facere, voluptatibus alias ipsum modi totam ipsam reprehenderit quod harum culpa unde labore dolore? Veniam voluptatibus quisquam illum ea, explicabo rem cum nulla velit quasi necessitatibus doloremque quis quia est, optio nemo expedita. Porro quos ducimus, iste itaque dolore mollitia iusto quisquam! Blanditiis expedita earum, quisquam quis pariatur!
				</p>
			</Element>

			<Element name="parrafo2">
				<h1>Contenido 2</h1>
				<p style={{padding:"5% 10%"}}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta fuga quas est nihil praesentium numquam necessitatibus delectus dolorum atque, officiis eveniet molestiae enim maxime nemo id facilis temporibus distinctio ex consequatur. Aperiam ipsum voluptatum quam ratione, mollitia qui tempora, animi nihil inventore aliquam esse minus ea iusto consequuntur et. Non pariatur aliquid ea suscipit iusto maiores nulla commodi quidem odio voluptatem mollitia assumenda quaerat eligendi officiis velit voluptate cumque, quasi sit numquam quod! Sapiente veniam ad, harum, reiciendis facilis nemo quas quidem voluptate quae similique. Voluptas atque quidem labore tempore. Corporis quaerat sed iste perspiciatis molestias illum atque veritatis modi iure, quidem rerum nemo unde quod ratione saepe, cum pariatur perferendis, in laudantium excepturi nihil. Rerum perferendis molestias, numquam nisi delectus quaerat harum. Iusto labore sapiente alias repudiandae dolorum sint neque, cum harum voluptas nihil voluptates optio illo earum. Possimus vero quisquam, iure illo molestias porro sint eligendi esse assumenda, tempore dicta facere, voluptatibus alias ipsum modi totam ipsam reprehenderit quod harum culpa unde labore dolore? Veniam voluptatibus quisquam illum ea, explicabo rem cum nulla velit quasi necessitatibus doloremque quis quia est, optio nemo expedita. Porro quos ducimus, iste itaque dolore mollitia iusto quisquam! Blanditiis expedita earum, quisquam quis pariatur!
				</p>
			</Element>

			</div>
		)
	}
}