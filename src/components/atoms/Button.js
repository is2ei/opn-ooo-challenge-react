import React, { Component } from 'react';
import styled from 'styled-components';

const BaseButton = styled.button`
  background-color: #fff;
  border-color: #5781f5;
  border-radius: 3px;
  border-style: solid;
  border-width: 1.5px;
  color: #5781f5;
  cursor: pointer;
  height: 25px;
`

export class Button extends Component {
  render() {
    const { label, onClickHandler } = this.props;

    return (
      <BaseButton onClick={onClickHandler}>
        {label}
      </BaseButton>
    )
  }
}
