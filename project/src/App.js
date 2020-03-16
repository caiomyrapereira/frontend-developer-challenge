import React from 'react';
import Container from './Components/Container';
import axios from 'axios';


class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      href:[
        'https://www.linx.com.br/',
        'https://github.com/caiomyrapereira/frontend-developer-challenge/tree/ProjectReact',
        '#products',
        '#share'
      ],
      products:[], 
      nextPage:'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
    };
     
    this.InitProducts();

    this.moreProducts  = this.moreProducts.bind(this);
  }

  async getProducts(){
    const reponse = await axios.get(this.state.nextPage);
    const data = reponse.data
    
    this.setState({
      nextPage:`https://${data.nextPage}`,
      products: this.state.products.concat(...data.products)
    })
    console.log(this.state.nextPage)
    console.log(this.state.products)
    
  }

  InitProducts(){
     this.getProducts();
  }

  moreProducts(){
      this.getProducts();
  }


  render(){
    return (
      <Container 
        href={this.state.href}
        products = {this.state.products}
        moreProducts = {this.moreProducts}
      /> 
    );
  }
}

export default App;
