import React from 'react';
import './style.css';
import Button from '../Button';

const CardProduct = ({className, product}) => (
        <div   className={className} >
          <div className={'imgProduct'}>
            <img  alt={'name product'} src={product.image}  />
          </div>
          <div className={'textProduct'}>
            <h1 className={'nameProduct'} >
              {product.name}
            </h1>
            <p className={'productDescrib'} > 
              {product.description}
            </p>
            <p className={'beforePrice'}>
              De: R${product.oldPrice}
            </p>
            <p className={'currentPrice'}>
              Por: R${product.price}
            </p>
            <p className={'parcelPrice'} >
              ou {product.installments.count}x de R${product.installments.value}
            </p>
          </div>
          <div className={'buttonPurchaseProduct'}> 
            <Button className={'purchaseProduct'}>
              Comprar
            </Button>
          </div>
        </div>  
);

export default CardProduct;