import React from 'react';
import './style.css'

const Menu =(props)=>(
        <div className="menu"> 
           <nav>
             <ul type="none" >
                { 
              	  [
              	    'Conheça a Linx',
                    'Ajude o algorítimo',
                    'Seus produtos',
                    'Compartilhe'
                  ]
                  .map((item,index,arr)=>{
                    return <li key={index} > <button> {item} </button> </li>
                  }) 
                }
             </ul>
           </nav> 
       </div>
);

export default Menu;