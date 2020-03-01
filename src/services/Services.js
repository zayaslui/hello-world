import axios from 'axios';

/*constantes*/
const REACT_APP_API_URL_BASE = window.location.protocol + "//"+ window.location.hostname + ":8080";

const getAuth = () => {
	return {
				  headers: {
			  						 'JWT':12345
									},
				};		
}

export const getDataFindby = (modelo,json,cantidad=1) => {
	let url = REACT_APP_API_URL_BASE + '/backapp/rest/crudservice/findby/'+modelo+'/'+cantidad;
	return axios
				.post(url,json,getAuth())
				.then(response =>{
					return response;
				})
				.catch(err => {
					console.log(err);
				})
}