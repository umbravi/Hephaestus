import { SET_MAIN_TEXT, SET_LINK_TEXT } from './defaults.constants'

export const setMainText = (mainText) => ({
  type: SET_MAIN_TEXT,
  payload: {
    mainText: mainText,
  },
})

export const setLinkText = (linkText) => ({
  type: SET_LINK_TEXT,
  payload: {
    linkText: linkText,
  },
})

export default {
  setMainText,
  setLinkText,
}
