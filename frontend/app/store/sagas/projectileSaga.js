/* eslint-disable no-underscore-dangle */
import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'utils/axios-base';

// import constants
import {
  CREATE_PROJECTILE,
  GET_PROJECTILE,
  DELETE_PROJECTILE,
  EDIT_PROJECTILE,
  GET_PROJECTILES,
  DELETE_PROJECTILES,
} from '../actions/actionConstants';

// import actions
import {
  getProjectileSuccess,
  getProjectileFailed,
  getProjectilesSuccess,
} from '../actions/projectileActions';

export function* createProjectileSaga(action) {
  const { payload } = action;
  const projectileResponse = yield axios.post('create_projectile', {
    acceleration: payload.acceleration,
    hang_time: payload.hang_time,
    bounce_height: payload.bounce_height,
  });
  if (projectileResponse.status === 200) {
    yield put(push(`projectile/${projectileResponse.data.identity}`));
  }
}

export function* getProjectileSaga(action) {
  const { payload } = action;
  const projectileResponse = yield axios.get(`projectile/${payload.identity}`);
  if (projectileResponse.status === 200) {
    yield put(getProjectileSuccess(projectileResponse.data));
  } else {
    yield put(getProjectileFailed());
  }
}

export function* deleteProjectileSaga(action) {
  const { payload } = action;
  yield axios.delete(`projectile/${payload.identity}`);
}

export function* editProjectileSaga(action) {
  const { payload } = action;
  const projectileResponse = yield axios.put(
    `edit_projectile/${payload.identity}`,
    {
      identity: payload.new_identity,
    },
  );
  if (projectileResponse.status === 200) {
    yield put(getProjectileSuccess(projectileResponse.data));
  }
}

export function* getProjectilesSaga() {
  const projectilesResponse = yield axios.get('projectiles');
  if (projectilesResponse.status === 200) {
    yield put(getProjectilesSuccess(projectilesResponse.data));
  }
}

export function* deleteProjectilesSaga() {
  yield axios.delete('projectiles');
}

export default function* watchProjectileSaga() {
  yield takeLatest(CREATE_PROJECTILE, createProjectileSaga);
  yield takeLatest(GET_PROJECTILE, getProjectileSaga);
  yield takeLatest(DELETE_PROJECTILE, deleteProjectileSaga);
  yield takeLatest(EDIT_PROJECTILE, editProjectileSaga);
  yield takeLatest(GET_PROJECTILES, getProjectilesSaga);
  yield takeLatest(DELETE_PROJECTILES, deleteProjectilesSaga);
}
