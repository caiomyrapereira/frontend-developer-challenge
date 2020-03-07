import React from 'react';
import './style.css';
import SendFriend from '../sendFriend';
import Products from '../Products';

const Main = (props)=>(
        <div className="main">
          
          <Products />
          
          <SendFriend />
          
        </div>
);

export default Main;