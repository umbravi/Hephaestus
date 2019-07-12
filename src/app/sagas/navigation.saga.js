import { take, put } from 'redux-saga/effects'
import { NAVIGATE_TO_PATH } from '../modules/Navigation/Navigation.constants'
import { push } from 'connected-react-router'

export default function* navigationRoot() {
  while (true) {
    const { payload: { path } = {} } = yield take(NAVIGATE_TO_PATH)
    yield put(push(path))
  }
}
