'use strict';

import React from 'react';
import Header from './Components/Header';

class App extends React.Component{
  
  constructor(){
    super();
    this.state = {

    };
  }

  render(){
    return (
      <div className="App">
        <Header /> 
      </div>
    );
  }
}

export default App;
