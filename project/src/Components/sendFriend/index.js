import React from 'react';
import './style.css'
import Button from '../Button'

const sendFriend = (props) =>(
        <div className="sendFriend">
          <h1 className="titleShare" > Compartilhe a novidade </h1>
          <p className="notice"> Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora! </p>
          <form className="send">
            <div className="flex-friend">
               <div className="nameFriend">
                 <label>Nome do seu amigo:</label>
                 <input  name="name" type="text" />
               </div>

               <div className="emailFriend">
                 <label>email:</label>
                 <input  name="email" type="text" />
               </div>
               
               <div className="buttonCenter">
                 <Button className = "ButtonSendFriend" >Enviar agora</Button>
               </div>

            </div>
          </form>
        </div> 
);

export default sendFriend;