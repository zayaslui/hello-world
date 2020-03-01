import React, { Component }  from 'react';
// import logo from './images/logo.svg';
import './css/Content.css';

class Content extends Component {
  //leer props pasar props al constructor
        constructor(){
            super();
            this.state = {
              count : 0,
              numero1:0,
              numero2:0,
              resultado:0
            };
            this.handleCountClick = this.handleCountClick.bind(this);
            this.handleResultadoClick = this.handleResultadoClick.bind(this);
            this.handleInputChanged = this.handleInputChanged.bind(this);            
            // this.handleInput=this.handleInput
        }
  //obs : prefijo handle a las funciones de onClick, etc
  //obs : cada ves que se actualiza el state se ejecuta el render
  //obs : bind se usa para que la funcion tenga acceso al state props

  //si el componente ya cargo
          componentDidMount(){
            this.setState({
              count:1
            })
          }
          handleResultadoClick(e){
            this.setState({
              resultado:this.state.numero1+this.state.numero2
            })  
          }
          handleInputChanged(e){
                if(e.target.id === 'numero1'){
                    this.setState({
                      numero1: parseInt(e.target.value)
                    });
                  }else{
                    this.setState({
                      numero2: parseInt(e.target.value)
                    });             
                  }
          }
          handleInput(e){

          }
          handleCountClick(e){                
                if(e.target.id==='add'){
                  //suma
                  this.setState({
                    count : this.state.count+1
                  })
                }else if(e.target.id==='subtract' && this.state.count>0){
                  this.setState({
                      count : this.state.count - 1
                  })
                }else{
                  this.setState({
                    count:0
                  })
                }
            }

  render(){
    return (
      <div className="Header">
          <h2>Counter : {this.state.count}</h2>
          <p>
            <button id='add' onClick={this.handleCountClick}> + </button>
            <button id='subtract' onClick={this.handleCountClick}> - </button>
            <button id='reset' onClick={this.handleCountClick}> reset </button>                        
          </p>
          <h2>Calculadora</h2>
          <p>
              <input id="numero1" type="number"  value={this.state.numero1} onChange={this.handleInputChanged}/>
              +
              <input id="numero2" type="number" value={this.state.numero2} onChange={this.handleInputChanged} />
              <button id="resultado" onClick={this.handleResultadoClick}> = </button> 
              {this.state.resultado}
          </p>
      </div>
    );    
  }
}

export default Content;
