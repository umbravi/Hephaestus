import typeToReducer from 'type-to-reducer'
import { mainPage } from '../../copy'
import constants from './MainWindow.constants'

const initState = {}

export const mainReducers = typeToReducer({}, initState)
