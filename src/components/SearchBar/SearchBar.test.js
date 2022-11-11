import React from 'react';
import { render } from '@testing-library/react';
import { JssProvider } from 'react-jss';
import { withThemeProvider } from '../../tests/helpers';
import BDSearchTextField from './SearchBar';

const props = {
  id: '',
  searchIconColor: '',
  placeholder: '',
  labelStyle: {},
  value: '',
  style: {},
  className: '',
  onChange: jest.fn(),
  options: [],
  showOptions: true,
  onSelectOption: jest.fn(),
};

describe('Testing BDSearchTextField', () => {
  it('should render successfully', () => {
    const { queryByTestId } = render(
      withThemeProvider(
        () => (
          <JssProvider>
            <BDSearchTextField {...props} />
          </JssProvider>
        ),
        {},
      ),
    );
    const searchTextField = queryByTestId('search-text-field');

    expect(searchTextField).toBeTruthy();
    expect(searchTextField).toMatchSnapshot();
  });
});
