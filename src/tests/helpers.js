import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { JssProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { theme } from '../utils/theme';
import { store } from '../redux';

const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`;

export const withThemeProvider = (
  Child,
  props,
  customTheme,
) => (
  <ThemeProvider theme={customTheme || theme}>
    <JssProvider generateClassName={generateClassName}>
      <Child {...props} />
    </JssProvider>
  </ThemeProvider>
);

export const withStore = (Child, props, customStore) => (
  <Provider store={customStore || store}>
    <JssProvider generateClassName={generateClassName}>
      <Child {...props} />
    </JssProvider>
  </Provider>
);

export const withRouterAndStore = (
  Child,
  props,
  customStore,
  initialEntries,
) => (
  <Provider store={customStore || store}>
    <MemoryRouter initialEntries={initialEntries}>
      <JssProvider generateClassName={generateClassName}>
        <Child {...props} />
      </JssProvider>
    </MemoryRouter>
  </Provider>
);

export const withRouterThemeAndStore = (
  Child,
  props,
  customStore,
  initialEntries,
  customTheme,
) => (
  <Provider store={customStore || store}>
    <ThemeProvider theme={customTheme || theme}>
      <MemoryRouter initialEntries={initialEntries}>
        <JssProvider generateClassName={generateClassName}>
          <Child {...props} />
        </JssProvider>
      </MemoryRouter>
    </ThemeProvider>
  </Provider>
);

export const withThemeAndStore = (
  Child,
  props,
  customTheme,
  customStore,
) => (
  <Provider store={customStore || store}>
    <ThemeProvider theme={customTheme || theme}>
      <JssProvider generateClassName={generateClassName}>
        <Child {...props} />
      </JssProvider>
    </ThemeProvider>
  </Provider>
);

export const renderComponent = (Component, props) =>
  render(
    <ThemeProvider theme={theme}>
      <JssProvider generateClassName={generateClassName}>
        <Component {...props} />
      </JssProvider>
    </ThemeProvider>,
  );
