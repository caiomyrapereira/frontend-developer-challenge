import React from 'react';
import './style.css'
import Button from '../Button';

const Menu =(props)=>(
        <div>
          <nav className="flex-menu"> 

            { 
              [
              	'Conheça a Linx',
                'Ajude o algorítimo',
                'Seus produtos',
                'Compartilhe'
              ]
              .map((item,index,arr)=>{
                return <div key={index} > <Button> {item} </Button> </div>
              }) 
            }
        
          </nav>
        </div>
);

export default Menu;