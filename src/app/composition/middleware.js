import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

export const sagaMiddleware = createSagaMiddleware()

export const middleware = (history) => [
  thunkMiddleware,
  promiseMiddleware(),
  sagaMiddleware,
  routerMiddleware(history),
]
