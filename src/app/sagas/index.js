import { all } from 'redux-saga/effects'
import navigationRoot from './navigation.saga'

export default function* rootSaga() {
  yield all([navigationRoot()])
}
