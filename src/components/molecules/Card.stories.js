import React from 'react';

import { Card } from './Card';
import image from '../../../public/images/baan-kru-noi.jpg'

export default {
  title: 'Molecules/Card',
  component: Card,
}

const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  name: 'Baan Kru Noi',
  image,
};
