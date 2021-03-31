import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';

import { GlobalStyle } from './globalStyle';
import { summaryDonations } from './helpers';

import {
  Donation,
} from './components/pages';

export default connect((state) => state)(
  class App extends Component {
    state = {
      charities: [],
    };

    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/charities')
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          self.setState({ charities: data });
        });

      fetch('http://localhost:3001/payments')
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map((item) => item.amount)),
          });
        });
    }

    render() {
      const { donate, message } = this.props;

      return (
        <IntlProvider
          locale={this.props.locale}
          defaultLocale="en"
          messages={this.props.messages}
        >
          <GlobalStyle />
          <Donation
            donate={donate}
            message={message}
            charities={this.state.charities}
          />
        </IntlProvider>
      );
    }
  }
);
