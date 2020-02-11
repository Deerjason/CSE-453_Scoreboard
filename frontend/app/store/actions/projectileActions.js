import {
  CREATE_PROJECTILE,
  GET_PROJECTILE,
  GET_PROJECTILE_SUCCESS,
  GET_PROJECTILE_FAILED,
  DELETE_PROJECTILE,
  EDIT_PROJECTILE,
  EDIT_PROJECTILE_FAILED,
  GET_PROJECTILES,
  GET_PROJECTILES_SUCCESS,
  DELETE_PROJECTILES,
} from './actionConstants';

export const createProjectile = payload => ({
  type: CREATE_PROJECTILE,
  payload,
});

export const getProjectile = payload => ({
  type: GET_PROJECTILE,
  payload,
});

export const getProjectileSuccess = payload => ({
  type: GET_PROJECTILE_SUCCESS,
  payload,
});

export const getProjectileFailed = () => ({
  type: GET_PROJECTILE_FAILED,
});

export const deleteProjectile = payload => ({
  type: DELETE_PROJECTILE,
  payload,
});

export const editProjectile = payload => ({
  type: EDIT_PROJECTILE,
  payload,
});

export const editProjectileFailed = payload => ({
  type: EDIT_PROJECTILE_FAILED,
  payload,
});

export const getProjectiles = () => ({
  type: GET_PROJECTILES,
});

export const getProjectilesSuccess = payload => ({
  type: GET_PROJECTILES_SUCCESS,
  payload,
});

export const deleteProjectiles = () => ({
  type: DELETE_PROJECTILES,
});
