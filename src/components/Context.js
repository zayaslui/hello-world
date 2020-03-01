import React from "react";
//crear un valor predeterminado
// export default React.createContext({
//  	idioma: "es",
// 	setIdioma: () => {}  
// });

// al importar usar { IdiomaContext }
// const IdiomaContext = React.createContext({"idioma":"es"});
// export { IdiomaContext };

const { Provider, Consumer } = React.createContext();

export { Provider, Consumer };