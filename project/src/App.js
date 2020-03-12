import React from 'react';
import Container from './Components/Container';

class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      href:[
        'https://www.linx.com.br/',
        'https://github.com/caiomyrapereira/frontend-developer-challenge/tree/ProjectReact',
        '#products',
        '#share'
      ]
    };
  }

  render(){
    return (
      <Container 
        href={this.state.href}
      /> 
    );
  }
}

export default App;
