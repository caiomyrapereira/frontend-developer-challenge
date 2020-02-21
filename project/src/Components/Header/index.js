import React from 'react';
import Menu from '../Menu'
import './style.css'

const Header = (props) => (
        <header className="top" >
          <p className="selecao font">uma seleção de produtos</p>
          <h1 className="title font" >especial para você</h1>
          <p className="font" >
            Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
          </p>
          <Menu />
        </header>
)

export default Header;