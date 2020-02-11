import produce from 'immer';
import {
  GET_PROJECTILE_SUCCESS,
  GET_PROJECTILE_FAILED,
  EDIT_PROJECTILE_FAILED,
  GET_PROJECTILES_SUCCESS,
} from '../actions/actionConstants';

// The initial state of the App
export const initialState = {
  projectile: {
    identity: null,
    acceleration: null,
    hang_time: null,
    bounce_height: null,
    score: null,
    error: false,
    edit_error: false,
  },
  projectiles: null,
};

/* eslint-disable default-case, no-param-reassign */
const projectileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PROJECTILE_SUCCESS:
        draft.projectile = action.payload;
        break;
      case GET_PROJECTILE_FAILED:
        draft.projectile.error = true;
        break;
      case EDIT_PROJECTILE_FAILED:
        draft.projectile.edit_error = true;
        break;
      case GET_PROJECTILES_SUCCESS:
        draft.projectiles = action.payload;
        break;
    }
  });

export default projectileReducer;
