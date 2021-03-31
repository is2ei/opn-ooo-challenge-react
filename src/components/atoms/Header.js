import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

export const Header = ({}) => (
  <header>
    <Title><FormattedMessage id="title" /></Title>
  </header>
)

Header.propTypes = {}

Header.defaultProps = ({})

const Title = styled.h1`
  color: #636A79;
  font-weight: 900;
`
