import React from 'react';
import styled from 'styled-components';

export const Header = ({}) => (
  <header>
    <Title>Omise Tamboon React</Title>
  </header>
)

Header.propTypes = {}

Header.defaultProps = ({})

const Title = styled.h1`
  color: #83848e;
`
