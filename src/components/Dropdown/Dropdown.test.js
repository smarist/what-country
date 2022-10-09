import { render } from '@testing-library/react';
import { withThemeProvider } from '../../tests/helpers';
import Dropdown from './Dropdown';

describe('Dropdown Test', () => {
  it('should render successfully', () => {
    const { queryByTestId } = render(withThemeProvider(Dropdown, { value: '' }));
    const dropdown = queryByTestId('dropdown');

    expect(dropdown).toBeTruthy();
    expect(dropdown).toMatchSnapshot();
  });
});
