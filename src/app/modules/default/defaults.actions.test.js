import actions from './defaults.actions'
import constants from './defaults.constants'

describe('default Action', () => {
  it('setMainText returns the correct object with the input', () => {
    const text = 'Its a beautiful day in the neighborhood'
    const actual = actions.setMainText(text)

    expect(actual.type).toEqual(constants.SET_MAIN_TEXT)
    expect(actual.payload.mainText).toEqual(text)
  })
  it('setLinkText returns the correct object with the input', () => {
    const link = 'http://thingy.io'
    const actual = actions.setLinkText(link)

    expect(actual.type).toEqual(constants.SET_LINK_TEXT)
    expect(actual.payload.linkText).toEqual(link)
  })
})
