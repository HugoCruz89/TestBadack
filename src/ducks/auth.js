import {createAction, createReducer} from '@reduxjs/toolkit';
//consts

const LOGIN = '2noty/auth/LOGIN';

const LOGOUT = '2noty/auth/LOGOUT';

const REGISTER_USER = '2noty/auth/REGISTER_USER';

//actions

export const logOut = createAction(LOGOUT);

export const loginUser = createAction(LOGIN, (email, password) => ({
  payload: {
    data: {
      email,
      password,
    },
  },
}));

export const registerUser = createAction(REGISTER_USER, data => ({
  payload: {
    request: {
      url: `/auth/register`,
      method: 'post',
      data,
    },
  },
}));

const initState = {
  token: null,
  email: null,
  idUser: null,
};

//reducer
const reducer = createReducer(initState, {
  [LOGIN](state, action) {
    const {
      data: {email, password},
    } = action.payload;
    return {
      ...state,
      token: email,
    };
  },
  [LOGOUT]() {
    return initState;
  },
});

export default reducer;
