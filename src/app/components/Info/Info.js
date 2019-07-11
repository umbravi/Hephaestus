import React from 'react'
import { Card, Button, Figure } from 'react-bootstrap'
import './Info.css'

class Info extends React.PureComponent {
  render() {
    return (
      <Card bg="dark" text="light" style={{ width: '18rem' }}>
        <Card.Header>Featured</Card.Header>
        <Card.Body style={{ color: '#61dafb' }}>
          <Card.Title>Info</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default Info
