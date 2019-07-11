import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { mainReducers as main } from '../modules/MainWindow/MainWindow.reducers'
import { defaultsReducers as defaults } from '../modules/default/defaults.reducers'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    main,
    defaults,
  })
