import React, { Component } from 'react';
import { render } from 'react-dom';


class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {  }
    console.log(process.env)
  }

    render() {
      
      return <h1>Hello,Webpack</h1>
    }
    
  

 
}

render(<Button/>, window.document.getElementById('app'));
