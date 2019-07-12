import { NAVIGATE_TO_PATH } from './Navigation.constants'

export const navigateToPath = (path) => ({
  type: NAVIGATE_TO_PATH,
  payload: { path },
})

export default {
  navigateToPath,
}
