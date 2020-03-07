import React from 'react';
import Button from '../Button';
import './style.css'

const Products = (props) =>(
        <div class="products" >

          <h1 class="titleProduct" > Sua seleção especial </h1> 

          <div class="flex-Products"> 
            {[1,2,3,4,5,6,7,8].map( (item, index )=>{
              return (
                       <div key={item} class="cardProduct" >
                             {item} 
                       </div>
                     )
            } )}
          </div>

          <center>
            <Button className={'moreProducts'}> Ainda mais produtos aqui! </Button>
          </center>

        </div>
);

export default Products;