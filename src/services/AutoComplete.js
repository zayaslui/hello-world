//dependencias
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { getDataFindby } from './Services';
import './AutoComplete';

const languages = [
{
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  }
];

// controlar los valores
// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0 ? [] : languages.filter(lang =>
//     lang.name.toLowerCase().slice(0, inputLength) === inputValue
//   );
// };



// Cuando se hace clic en la sugerencia, la sugerencia automática debe completar la entrada
// basado en la sugerencia en la que se hizo clic. Enseñe a Autosuggest cómo calcular el
// valor de entrada para cada sugerencia dada.
const getSuggestionValue = suggestion => suggestion["descripcion"] ;

// Usa tu imaginación para hacer sugerencias.
const renderSuggestion = suggestion => (
  <div>
    {suggestion["descripcion"]}
  </div>
);


class AutoComplete extends Component{
	  constructor() {
    super();

	// Autosuggest es un componente controlado.
     // Esto significa que debe proporcionar un valor de entrada
     // y un controlador onChange que actualiza este valor (ver más abajo).
     // También se deben proporcionar sugerencias al Autosuggest,
     // e inicialmente están vacíos porque el Autosuggest está cerrado.
    this.state = {
      value: '',
      suggestions: []
    };
  }
    onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

	// Autosuggest llamará a esta función cada vez que necesite actualizar sugerencias.
   // Ya implementaste esta lógica anterior, así que solo úsala.
  onSuggestionsFetchRequested = ({ value }) => {
    // this.setState({
    //   suggestions: getSuggestions(value)
    // });
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;

      let json = [{
      "campo":"descripcion",
      "tipo" : "String",
      "valor": "%"+value+"%",
      "operador":"like",
      "siguiente":" "
      }]
    getDataFindby("menu",json,10).then( res => {
      if(res && res.data){
        // console.log(res.data)
        //manejar los datos
        let data = (inputLength===0)?[]:res.data
        console.log(data)
        this.setState({
          suggestions: data
        });
      }
    })
  };
// Autosuggest llamará a esta función cada vez que necesite borrar sugerencias.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
	render(){
		const { value, suggestions } = this.state;

		// Autosuggest pasará a través de todos estos accesorios a la entrada.

		const inputProps = {
		  placeholder: 'Type a programming language',
		  value,
		  onChange: this.onChange,
		};

		return(
				<Autosuggest
				        suggestions={suggestions}
				        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
				        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
				        getSuggestionValue={getSuggestionValue}
				        renderSuggestion={renderSuggestion}
				        inputProps={inputProps}
				      />
		);
	}
}

export default AutoComplete;