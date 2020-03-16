import React from 'react';
import Button from '../Button';
import CardProduct from '../CardProduct';
import './style.css'

const Products = ({products, moreProducts}) =>(
        <div id={'products'} className="products" >

          <h1 className="titleProduct" > Sua seleção especial </h1> 

          <div  className="flex-Products"> 
            {products.map( (item, index )=>{
              return (
                       <CardProduct key={item.id} className='cardProduct'  product={item}   />
                     )
            } )}
          </div>

          <center>
            <Button className={'moreProducts'} onClick={moreProducts} > Ainda mais produtos aqui! </Button>
          </center>

        </div>
);

export default Products;