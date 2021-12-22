import {GlobalStyle} from '../src/styles';
import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import {BrowserRouter} from 'react-router-dom';
export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  apolloClient: {
    MockedProvider,
  },
};
export const decorators = [
  Story => (
    <BrowserRouter>
      <GlobalStyle />
      <Story />
    </BrowserRouter>
  ),
];
