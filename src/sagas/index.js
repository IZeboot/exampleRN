import { fork } from 'redux-saga/effects';
import user from './User';
export default function* rootSaga() {
  yield [
    user
  ]
}