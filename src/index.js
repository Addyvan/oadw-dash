import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: 'https://data.api.gccollab.ca/graphql',
  addTypename: false
});

ReactDOM.render(
    <I18nextProvider i18n={ i18n }>
      <ApolloProvider client={client} >
        <App />
      </ApolloProvider>
    </I18nextProvider>,  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();