import React from 'react';
import Menu from '../Menu'
import './style.css';

const Header = ({href}) => (
        <div className="top" >
          <p className="selecao font">uma seleção de produtos</p>
          <h1 className="title font" >especial para você</h1>
          <p className="aviso font" >
            Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
          </p>
          <Menu href={href} />
        </div>
)

export default Header;