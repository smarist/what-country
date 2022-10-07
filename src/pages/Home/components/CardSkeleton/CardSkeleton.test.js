import { render } from '@testing-library/react';
import { withThemeProvider } from '../../../../tests/helpers';
import CardSkeleton from './CardSkeleton';

describe('Card Skeleton Test', () => {
  it('should render successfully', () => {
    const { queryByTestId } = render(withThemeProvider(CardSkeleton, { value: '' }));
    const card = queryByTestId('card-skeleton');

    expect(card).toBeTruthy();
    expect(card).toMatchSnapshot();
  });
});
