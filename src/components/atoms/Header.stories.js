import React from 'react';

import { Header } from './Header';

export default {
  title: 'Atoms/Header',
  component: Header,
}
 
const Template = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {}
