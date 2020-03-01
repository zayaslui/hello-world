import React from "react";
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';

const skinsPath = '/skins/';

class LayerSlider extends React.Component {

	componentDidMount(){
		window.$("#layerslider").layerSlider({
				skinsPath: skinsPath,
	            height : '400px',
	            skin:'v5',
	            responsive : true,
	            responsiveUnder : 960,
	            // sublayerContainer : 960,
	            autoStart : true,
	            pauseOnHover : false,
	            firstLayer : 1,
	            animateFirstLayer : true,
	            randomSlideshow : false,
	            twoWaySlideshow : true,
	            loops : 0,
	            forceLoopNum : true,
	            autoPlayVideos : true,
	            autoPauseSlideshow : 'auto',
	            // youtubePreview : 'maxresdefault.jpg',
	            keybNav : true,
	            touchNav : true,
	            // skin : '',
	            // globalBGColor : 'transparent',
				navPrevNext : true,
	            navStartStop : true,
	            navButtons : true,
	            hoverPrevNext : true,
	            hoverBottomNav : false,
	            showBarTimer : false,
	            showCircleTimer : true,
	            thumbnailNavigation : 'disabled',
	            tnWidth : 100,
	            tnHeight : 60,
	            tnContainerWidth : '60%',
	            tnActiveOpacity : 35,
	            tnInactiveOpacity : 100,
	            imgPreload : true,
	    		yourLogo : false,
	            yourLogoStyle : 'left: 10px; top: 10px;',
	            yourLogoLink : false,
	            yourLogoTarget : '_self',				
	            cbInit : function(element) { },
	            cbStart : function(data) { },
	            cbStop : function(data) { },
	            cbPause : function(data) { },
	            cbAnimStart : function(data) { },
	            cbAnimStop : function(data) { },
	            cbPrev : function(data) { },
	            cbNext : function(data) { }
		})

	}

	render(){
		return(
				<div id="slider-wrapper">
					<div id={"layerslider"} className={"layerslider"} style={{"width": "1000px", "height": "800px"}}>
								<div className={"ls-slide"} data-ls={"slidedelay: 7000; transition2d: 75,79;"}>
									<img src={slider1} className={"ls-bg"} alt={"Slide background"}/>
									<p className={"ls-l"} style={{
										"top":"70px",
									    "left":"10px",
									    "fontWeight": "300",
									    "height":"40px",
									    "paddingRight":"10px",
									    "paddingLeft":"10px",
									    "fontSize":"30px",
									    "lineHeight":"37px",
									    "color":"#ffffff",
									    "background":"#3D82DA",
									    "borderRadius":"4px",
									    "whiteSpace": "nowrap"}}
									    data-ls={"durationin:1500;delayin:3300;rotatein:20;rotatexin:30;scalexin:1.5;scaleyin:1.5;transformoriginin:left 50% 0;durationout:750;rotateout:20;rotatexout:-30;scalexout:0;scaleyout:0;transformoriginout:left 50% 0;"}>
									    EDB Construcciones
									</p>
										<p className="ls-l" style={{
											top:"130px",
										    left:"10px",
										    fontWeight: "300",
										    height:"40px",
										    paddingRight:"10px",
										    paddingLeft:"10px",
										    fontSize:"30px",
										    lineHeight:"37px",
										    color:"#ffffff",
										    background:"#3D82DA",
										    borderRadius:"4px",
										    whiteSpace: "nowrap", 
											}}
										    data-ls="durationin:1500;delayin:4300;rotatein:20;rotatexin:30;scalexin:1.5;scaleyin:1.5;transformoriginin:left 50% 0;durationout:750;rotateout:20;rotatexout:-30;scalexout:0;scaleyout:0;transformoriginout:left 50% 0"
										    >
												Una empresa Paraguaya de Ingeniería
										</p>
								</div>
								<div className={"ls-slide"} data-ls={"slidedelay: 7000; transition2d: 75,79;"}>
									<img src={slider2} className={"ls-bg"} alt={"Slide background"}/>
										<p className="ls-l" style={{
											top:"130px",
										    left:"10px",
										    fontWeight: "300",
										    height:"40px",
										    paddingRight:"10px",
										    paddingLeft:"10px",
										    fontSize:"30px",
										    lineHeight:"37px",
										    color:"#ffffff",
										    background:"#3D82DA",
										    borderRadius:"4px",
										    whiteSpace: "nowrap", 
											}}
										    data-ls="durationin:1500;delayin:4300;rotatein:20;rotatexin:30;scalexin:1.5;scaleyin:1.5;transformoriginin:left 50% 0;durationout:750;rotateout:20;rotatexout:-30;scalexout:0;scaleyout:0;transformoriginout:left 50% 0"
										    >
												descripcion
										</p>
								</div>								
					</div>				
				</div>	
		)
	}
}

export default LayerSlider;