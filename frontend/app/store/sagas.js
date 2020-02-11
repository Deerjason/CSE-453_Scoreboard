import { all, call, fork } from 'redux-saga/effects';

// import all the sagas here and add it to the below sagas array
import projectileSaga from './sagas/projectileSaga';

function* rootSaga() {
  const sagas = [projectileSaga];

  yield all(
    sagas.map(saga =>
      // eslint-disable-next-line func-names
      fork(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
          }
        }
      }),
    ),
  );
}

export default rootSaga;
