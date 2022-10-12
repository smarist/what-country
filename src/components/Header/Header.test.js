import { render } from '@testing-library/react';
import Header from './Header';
import { withThemeAndStore } from '../../tests/helpers';

jest.mock('./hooks/useHeader', () =>
  jest.fn().mockReturnValue({
    onToggleTheme: jest.fn(),
    modeText: '',
    modeIcon: '',
  }));

const props = {
  onToggleTheme: jest.fn(),
};

describe('Testing Header Component', () => {
  it('Should render successfully', () => {
    const { queryByTestId } = render(withThemeAndStore(Header, props));

    const header = queryByTestId('header');
    expect(header).toBeTruthy();
    expect(header).toMatchSnapshot();
  });
});
