import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './style.css';

function ProfilPage({ login }) {
  return (
    <h1>
      Ваш логин: {login}
      <Link to='/' className='link__back'>
        Назад
      </Link>
    </h1>
  );
}

export default ProfilPage;
