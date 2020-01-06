import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const appRoot = document.getElementById('root');   // 1

export default class App extends Component {

  constructor(props){
    super(props);
    this.portalDiv = document.getElementById('react_portal');  //2
  }

  componentDidMount(){
    appRoot.appendChild(this.portalDiv);  //3
  }

  componentWillUnmount(){
    appRoot.removeChild(this.portalDiv);   //4
  }


  render() {
    
    return ( 
      <div style={{visibility:'hidden'}}>   
        {ReactDOM.createPortal(<div>this is a PORTAL</div>,this.portalDiv)}
        <div>Invisible</div>
      </div>
    );
  }
}




