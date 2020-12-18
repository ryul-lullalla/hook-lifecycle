import React from 'react';
import { Header } from '@components';
import { ThemeProvider } from 'styled-components';
import { withRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

import Routes from '@routes';
import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  InMemoryCache,
  concat,
  from,
  fromPromise,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const cache = new InMemoryCache();
const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_API_URL,
});
const client = new ApolloClient({
  uri: uploadLink,
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Header /> */}
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
