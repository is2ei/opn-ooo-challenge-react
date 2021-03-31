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
    const self = this;
    const { charities } = this.props;
    const cards = charities.map((item, i) => {

      return (
        <CardContainer key={i}>
          <Card
            name={item.name}
            image={`/images/${item.image}`}
            onClickPayButton={
              handlePay.call(
                self,
                item.id,
               self.state.selectedAmount,
                item.currency
              )
           }
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
 *
 * @example
 * fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
 */
function handlePay(id, amount, currency) {}

