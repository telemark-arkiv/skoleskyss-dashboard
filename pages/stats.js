'use strict'

import React from 'react'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Head from '../components/head'
import Server from '../components/Server'
import Summary from '../components/Summary'
import Navbar from '../components/Navbar'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Head />
        <Container fluid>
          <Navbar />
          <Row>
            <Col md='4'>
              <Server title='Serverstatus' source='https://parser.rss.micro.t-fk.no/?rss=http://rss.uptimerobot.com/u466262-6b2eba14d53383a6bab439cf37278141' refresh='10' />
            </Col>
            <Col md='8'>
              <Summary title='Skoler' source='https://logs.skoleskyss.t-fk.no/stats/schools' refresh='10' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
