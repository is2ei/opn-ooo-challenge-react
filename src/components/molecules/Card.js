import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Button,
} from '../atoms';

const CardContainer = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 540px;
`;

const CardImage = styled.img`
  border-radius: 3px 3px 0 0;
  display: block;
  height: 288px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`

const CardNameContainer = styled.div`
  align-items: center;
  display: flex;
  height: 65px;
  padding: 0 25px;
`

const CardName = styled.span`
  color: #586479;
`

const DonateButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 0;
`

const PaymentFormContainer = styled.div`
  background-color: #fff;
  color: #586479;
  height: 358px;
  opacity: 0.95;
  position: absolute;
  top: -1px;
  width: 551px;
`

const CancelButton = styled.div`
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  margin-left: auto;
  margin-right: 26px;
  margin-top: 26px;
  width: 13px;
`

const PaymentMessage = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 250px;
`

const AmountOptionsContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  justify-content: space-between;
  width: 250px;
`

const PaymentButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAmount: 10,
      isPaymentFormVisible: false,
    };
  }

  render() {
    const self = this;
    const { id, currency, name, image, onClickPayButton } = this.props;

    const payments = [10, 20, 50, 100, 500].map((amount, j) => (
      <label key={j}>
        <input
          type="radio"
          name="payment"
          onClick={() => {
            self.setState({ selectedAmount: amount })
          }}
        />
        {amount}
      </label>
    ));

    return (
      <CardContainer>
        <CardImage src={image} />
        <CardNameContainer>
          <CardName>{name}</CardName>
          <DonateButtonContainer>
            <Button
              label={'Donate'}
              onClickHandler={() => {
                self.setState({ isPaymentFormVisible: !self.state.isPaymentFormVisible });
              }}
            />
          </DonateButtonContainer>
        </CardNameContainer>
        {(() => {
          if (self.state.isPaymentFormVisible) {
            return <PaymentFormContainer>
              <CancelButton
                onClick={() => {
                  self.setState({ isPaymentFormVisible: false })
                }}
              >X</CancelButton>
              <PaymentMessage>Select the amount to donate (USD)</PaymentMessage>
              <AmountOptionsContainer>
                {payments}
              </AmountOptionsContainer>
              <PaymentButtonContainer>
                <Button
                  label={'Pay'}
                  onClickHandler={() => {
                    onClickPayButton(id, this.state.selectedAmount, currency)
                    self.setState({ isPaymentFormVisible: false })
                  }}
                />
              </PaymentButtonContainer>
            </PaymentFormContainer>
          }
        })()}
      </CardContainer>
    )
  }
}
