import { call, put, select } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../services/api';

import { Creators as UsersActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modal';

export function* addUser(action) {
  try {
    const userLogin = action.payload.user;
    const isDuplicated = yield select(state =>
      state.users.data.find(user => user.login === userLogin));

    if (isDuplicated) {
      const errorMessage = 'Usuário duplicado!';
      yield put(UsersActions.addUserFailure(errorMessage));

      toast.warn(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      });

      return;
    }

    const { data } = yield call(api.get, `/users/${userLogin}`);

    const userData = {
      id: data.id,
      login: data.login,
      name: data.name,
      avatar: data.avatar_url,
      url: data.html_url,
      cordinates: action.payload.cordinates,
    };

    yield put(UsersActions.addUserSuccess(userData));

    toast.success('Usuário adicionado com sucesso', {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    const errorMessage = 'Erro ao adicionar o usuário!';
    yield put(UsersActions.addUserFailure(errorMessage));

    toast.error(errorMessage, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } finally {
    yield put(ModalActions.hideModal());
  }
}
