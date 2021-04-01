import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Card,
} from '../molecules';

const CardContainer = styled.div`
  float: left;
`

export class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAmount: 10,
    };
  }

  render () {
    const { charities } = this.props;
    const cards = charities.map((item, i) => {
      return (
        <CardContainer key={i}>
          <Card
            id={item.id}
            currency={item.currency}
            name={item.name}
            image={`/images/${item.image}`}
            onClickPayButton={handlePay}
         />
        </CardContainer>
      );
    });

    return (
      <div>
        {cards}
      </div>
    )
  }
}

/**
 * Handle pay button
 *
 * @param {*} The charities Id
 * @param {*} amount The amount was selected
 * @param {*} currency The currency
 */
function handlePay(id, amount, currency) {
  fetch('http://localhost:3001/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
  })
}
