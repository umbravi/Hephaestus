import { defaultsReducers } from './defaults.reducers'
import actions from './defaults.actions'
import { defaultsPage } from '../../copy'

describe('defaults reducer', () => {
  const initState = {
    mainText: defaultsPage.MAIN_TEXT,
    linkText: defaultsPage.LINK_TEXT,
  }
  const irrelevantAction = { type: 'IRRELEVANT_ACTION' }

  it('sets the initial state', () => {
    expect(defaultsReducers(undefined, irrelevantAction)).toEqual(initState)
  })

  it('sets main text', () => {
    const expected = "Whew, got some new text here! We're going to love it!"
    const actual = defaultsReducers(undefined, actions.setMainText(expected))
    expect(actual.mainText).toEqual(expected)
  })

  it('sets link text', () => {
    const expected = 'http://testing.io'
    const actual = defaultsReducers(undefined, actions.setLinkText(expected))
    expect(actual.linkText).toEqual(expected)
  })
})
