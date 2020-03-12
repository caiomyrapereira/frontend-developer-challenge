import React from 'react';
import Img from "./img.jpg"
import './style.css';
import Button from '../Button';

const CardProduct = (props) => (
        <div   className={props.className} >
          <div className={'imgProduct'}>
            <img  alt={'name product'} src={Img}  />
          </div>
          <div className={'textProduct'}>
            <h1 className={'nameProduct'} >
              Nome do produto
            </h1>
            <p className={'productDescrib'} > 
              Descrição do produto um pouco maior, 
              com duas linhas ou três que explica melhor do que se trata.
            </p>
            <p className={'beforePrice'}>
              De: R$23,99
            </p>
            <p className={'currentPrice'}>
              Por: R$19,99
            </p>
            <p className={'parcelPrice'} >
              ou 2x de R$9,99
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