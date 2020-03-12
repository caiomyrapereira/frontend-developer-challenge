import React from 'react';
import './style.css'
import Button from '../Button';

const Menu =({href})=>(
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
                return <div key={index}  onClick={ ()=>window.location.href=href[index]  }    > <Button> {item} </Button> </div>
              }) 
            }
        
          </nav>
        </div>
);

export default Menu;