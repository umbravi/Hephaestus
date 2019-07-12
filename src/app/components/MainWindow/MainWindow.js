import React from 'react'
import { Route, Switch } from 'react-router'
import { HOME, HELLO, WORLD } from '../../paths'
import Defaults from '../defaults/defaults'
import './MainWindow.css'

class MainWindow extends React.PureComponent {
  render() {
    const placeholderStyle = {
      color: `white`,
      height: `100%`,
    }
    return (
      <Switch>
        <Route exact path={HOME} component={Defaults} />
        <Route
          path={HELLO}
          render={() => (
            <div className="mainContent" style={placeholderStyle}>
              Hello
            </div>
          )}
        />
        <Route
          path={WORLD}
          render={() => (
            <div className="mainContent" style={placeholderStyle}>
              world
            </div>
          )}
        />
      </Switch>
    )
  }
}

export default MainWindow
