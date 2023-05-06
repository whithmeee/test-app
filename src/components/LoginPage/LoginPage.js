import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, password } from '../../redux/actions/actions';
import { LOGIN, PASSWORD } from '../../constants/constants';

function LoginPage() {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handlerLogin = (event) => {
    dispatch(login(LOGIN, event.target.value));
    console.log(state.login);
  };

  const handlerPassword = (event) => {
    dispatch(password(PASSWORD, event.target.value));
    console.log(state.password);
  };
  return (
    <form className='form'>
      <input onChange={handlerLogin} className='form__input' placeholder='Логин' />
      <input onChange={handlerPassword} className='form__input' placeholder='Пароль' />
      <Link
        className={`form__link ${
          state.login === 'developer12' && state.password === '123456' ? '' : 'form__link--disabled'
        }`}
        to='/profile'>
        Войти
      </Link>
    </form>
  );
}

export default withRouter(LoginPage);
