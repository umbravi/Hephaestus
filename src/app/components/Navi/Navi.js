import React from 'react'

import { connect } from 'react-redux'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { push } from 'connected-react-router'

class Navi extends React.PureComponent {
  navigation = (props, uri) => {
    props.push(uri)
  }
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={() => this.navigation(this.props, '/')}>
          HME
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => this.navigation(this.props, '/')}>
            Home
          </Nav.Link>
          <Nav.Link onClick={() => this.navigation(this.props, '/hello')}>
            Hello
          </Nav.Link>
          <Nav.Link onClick={() => this.navigation(this.props, '/world')}>
            World
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    )
  }
}

export default connect(
  null,
  { push },
)(Navi)
