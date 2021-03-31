import React from 'react';
import { IntlProvider } from 'react-intl';

import { GlobalStyle } from '../src/globalStyle'
import messages from '../lang/en-US.json'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <IntlProvider
      locale="en"
      defaultLocale="en"
      messages={messages}
    >
      <GlobalStyle />
      <Story />
    </IntlProvider>
  )
]
