import { render } from '@testing-library/react';
import Home from './Home';
import { withThemeAndStore } from '../../tests/helpers';

jest.mock('nanoid');

jest.mock('./hooks/useHome', () =>
  jest.fn().mockReturnValue({
    dispatch: jest.fn(),
    onSearch: jest.fn(),
    state: {},
  }));

const props = {
  isLoading: true,
  countries: [],
};

describe('Testing Home Page', () => {
  it('Should render successfully', () => {
    const { queryByTestId } = render(withThemeAndStore(Home, props));

    const home = queryByTestId('home');
    expect(home).toBeTruthy();
    expect(home).toMatchSnapshot();
  });
});
