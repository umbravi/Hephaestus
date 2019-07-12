import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { navigateToPath } from '../../modules/Navigation/Navigation.actions'
import { HOME, HELLO, WORLD } from '../../paths'

class Navi extends React.PureComponent {
  render() {
    const { navigateToPath } = this.props
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={() => navigateToPath(HOME)}>HME</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => navigateToPath(HOME)}>Home</Nav.Link>
          <Nav.Link onClick={() => navigateToPath(HELLO)}>Hello</Nav.Link>
          <Nav.Link onClick={() => navigateToPath(WORLD)}>World</Nav.Link>
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
  { navigateToPath },
)(Navi)
