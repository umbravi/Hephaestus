import typeToReducer from 'type-to-reducer'
import { defaultsPage } from '../../copy'
import { SET_LINK_TEXT, SET_MAIN_TEXT } from './defaults.constants'

const initState = {
  mainText: defaultsPage.MAIN_TEXT,
  linkText: defaultsPage.LINK_TEXT,
}

export const defaultsReducers = typeToReducer(
  {
    [SET_MAIN_TEXT]: (state, action) => ({
      ...state,
      mainText: action.payload.mainText,
    }),
    [SET_LINK_TEXT]: (state, action) => ({
      ...state,
      linkText: action.payload.linkText,
    }),
  },
  initState,
)
