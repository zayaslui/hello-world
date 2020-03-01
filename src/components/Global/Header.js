//Dependencias
import React, { Component }  from 'react';
// sirve para validar el tipo de dato
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


//assets
import logo from './images/logo.svg';
import './css/Header.css';
import BtnIdiomas from './btnIdiomas';

class Header extends Component {

  //son requeridos si o si.
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render(){
    //macheo para variables
    const  { items } = this.props;    
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>Soy un Header</h2>
          <ul className="Menu">
            {
              items && items.map(
                    (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
              )
            }
            {/*anidado*/}
            <BtnIdiomas />
          </ul>
        </div>
      </div>
    );    
  }
}

export default Header;
