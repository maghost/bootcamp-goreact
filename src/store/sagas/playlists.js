import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ErrorActions } from '../ducks/error';
import { Creators as PlaylistsActions } from '../ducks/playlists';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obter as playlists'));
  }
}
