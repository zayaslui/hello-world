import React, {useState,useCallback, useEffect} from "react";

export default function BotonesHooks(props){


	const handleClickEs = useCallback(
		(e) => {
			props.onClick(e);
		}
	)
	const handleClickUs = useCallback(
		(e) => {
			props.onClick(e);
		}
	)
	useEffect(
		() => {
			
		},
		[props]
	)
	return(
			<div style={{padding:"20px"}}>
				<button id="es" name="es" style={{padding:"10px", margin:"20px"}} onClick={handleClickEs}>ES</button>
				<button id="us" name="us" style={{padding:"10px", margin:"20px"}} onClick={handleClickUs}>US</button>
			</div>		
	)

}