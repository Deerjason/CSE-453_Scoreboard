import { createSelector } from 'reselect';
import { initialState } from '../reducers/projectileReducer';

const selectProjectile = state => state.projectile || initialState;

const makeSelectProjectile = () =>
  createSelector(
    selectProjectile,
    projectileState => projectileState.projectile,
  );

const makeSelectProjectiles = () =>
  createSelector(
    selectProjectile,
    projectileState => projectileState.projectiles,
  );

export { selectProjectile, makeSelectProjectile, makeSelectProjectiles };
