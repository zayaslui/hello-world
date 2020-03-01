import React, { Component }  from 'react';
// import logo from './images/logo.svg';
import './css/Footer.css';
import PropTypes from 'prop-types';

class Footer extends Component {
    static propTypes = {
      copyright: PropTypes.string
    };
  render(){
    // console.log(this.props);
    const {copyright = '&copy; React 2019'} =  this.props;
    return (
      <div className="Footer">
          {/*caracteres especiales*/}
          <p dangerouslySetInnerHTML={{__html:copyright}}></p>
      </div>
    );
  }
}

export default Footer;
