import { LOGIN, PASSWORD } from '../../constants/constants';

const initalState = {
  login: '',
  password: '',
};

export const authReducer = (state = initalState, actions) => {
  switch (actions.type) {
    case LOGIN:
      return { ...state, login: actions.payload };
    case PASSWORD:
      return { ...state, password: actions.payload };

    default:
      return state;
  }
};
