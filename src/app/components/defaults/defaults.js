//
// This is the defualt create-react-app page - remove when poc complete
//

import React from 'react'
import { connect } from 'react-redux'
import logo from '../../../assets/logo.svg'
import './defaults.css'
import {
  getMainText,
  getLinkText,
} from '../../modules/default/defaults.selectors'

class Defaults extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { mainText, linkText } = this.props
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{mainText}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    mainText: getMainText(state),
    linkText: getLinkText(state),
  }),
  {},
)(Defaults)
