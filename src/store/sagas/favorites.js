import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as FavoriteActions } from '../ducks/favorites';

export function* addFavorite(action) {
  try {
    const favoriteName = action.payload.repository;
    const isDuplicated = yield select(state =>
      state.favorites.data.find(favorite => favorite.name === favoriteName));

    if (isDuplicated) {
      yield put(FavoriteActions.addFavoriteFailure('Repositório duplicado'));
      return;
    }

    const { data } = yield call(api.get, `/repos/${favoriteName}`);

    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
    };

    yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
  } catch (error) {
    yield put(FavoriteActions.addFavoriteFailure('Erro ao adicionar repositório'));
  }
}
