import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Header,
} from '../atoms';

import {
  Cards,
} from '../organisms';

const Donations = styled.p`
  text-align: center;
`

const Message = styled.p`
  color: #f1948a;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`

const CardsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1124px;
`

export class Donation extends Component {
  render () {

    const { donate, message, charities, onPaymentHandler } = this.props;

    return (
      <div>
        <Header />
        <Donations>All donations: {donate}</Donations>
        <Message>{message}</Message>
        <CardsContainer>
          <Cards
            charities={charities}
            onPaymentHandler={onPaymentHandler}
          />
        </CardsContainer>
      </div>
    )
  }
}
