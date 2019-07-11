import { createStore, applyMiddleware, compose } from 'redux'
import createRootReducer from './root-reducer'

export default (initialState, middleware, history) =>
  createStore(
    createRootReducer(history),
    initialState,
    compose(applyMiddleware(...middleware)),
  )
