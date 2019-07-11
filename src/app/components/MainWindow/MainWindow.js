import React from 'react'
import { Route, Switch } from 'react-router'
import Defaults from '../defaults/defaults'

class MainWindow extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Defaults} />
        <Route
          path="/hello"
          render={() => <div style={{ color: 'white' }}>hello</div>}
        />
        <Route
          path="/world"
          render={() => <div style={{ color: 'white' }}>world</div>}
        />
      </Switch>
    )
  }
}

export default MainWindow
