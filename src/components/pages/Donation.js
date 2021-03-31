import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Header,
} from '../atoms';

import {
  Cards,
} from '../organisms';

const Message = styled.p`
  color: red;
  margin: 1em 0;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`

export class Donation extends Component {
  render () {

    const { donate, message, charities } = this.props;

    return (
      <div>
        <Header />
        <p>All donations: {donate}</p>
        <Message>{message}</Message>
        <Cards
          charities={charities}
        />
      </div>
    )
  }
}
