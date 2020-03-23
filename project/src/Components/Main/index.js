import React from 'react';
import './style.css';
import SendFriend from '../sendFriend';
import Products from '../Products';

const Main = ({products, moreProducts})=>(
        <main className="main">
          
          <Products 
           products = {products}
           moreProducts={moreProducts}
          />
          
          <SendFriend />
          
        </main>
);

export default Main;