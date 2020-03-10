import React, {Component} from 'react';
import PropTypes from 'prop-types';

// components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data
import items from '../data/menu';

import 'bootstrap/dist/css/bootstrap.min.css';

//importamos el contexto
import { Provider } from './Context';

class App extends Component {
  constructor(){
    super()
    this.idioma()
    this.state = {
      idioma : localStorage.getItem("idioma"),
      contenido: {
        "es" : "contenido en español",
        "us" : "contenido en inglés"
      }
    }
  }
  idioma = (e) => {
    if(!localStorage.getItem("idioma")){
      localStorage.setItem("idioma","es")
    }
  }
  funcion =  (e) => {
      console.log(e.target.id)
      this.setState({
        idioma : e.target.id
      })
      localStorage.setItem("idioma",e.target.id);
  }

  static propTypes = {
    children: PropTypes.object.isRequired
  }
  
  render(){
    const { children } = this.props;
      return (
        <Provider value= {{
          idioma : this.state.idioma,
          funcion : this.funcion,
          contenido : this.state.contenido
        }}>
          <div className="App">
              <Header title='Titulo del Header' items={items}/>
              <Content  body={children}/>
              <Footer />
           </div>
        </Provider>
      );
  }
}

export default App;
