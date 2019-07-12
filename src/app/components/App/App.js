import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../Header/Header'
import MainWindow from '../MainWindow/MainWindow'
import Navi from '../Navi/Navi'
import Info from '../Info/Info'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Container>
          <Row>
            <Col className="header">
              <Header />
            </Col>
          </Row>
          <Row>
            <Col className="navi">
              <Navi />
            </Col>
          </Row>
          <Row>
            <Col className="info">
              <Info />
            </Col>
            <Col className="mainWindow">
              <MainWindow />
            </Col>
          </Row>
          <Row>
            <Col className="footer">{`Powered by React.`}</Col>
          </Row>
        </Container>
      </div>
    )
  }
}
