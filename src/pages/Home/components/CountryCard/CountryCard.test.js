import React from 'react';
import { render } from '@testing-library/react';
import CountryCard from './CountryCard';
import { withThemeAndStore } from '../../../../tests/helpers';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({ nameId: '' }),
  useNavigate: jest
    .fn()
    .mockReturnValue({ goBack: jest.fn() }),
  useLocation: jest.fn().mockReturnValue({}),
  Link: (propVal) => {
    const LinkNav = 'link-navigation';
    return <LinkNav {...propVal} />;
  },
}));

const props = {
  population: '',
  region: '',
  capital: '',
  flag: '',
  name: '',
};

describe('Testing Country Card Component', () => {
  it('Should render successfully', () => {
    const { queryByTestId } = render(withThemeAndStore(CountryCard, props));

    const countryCard = queryByTestId('country-card');
    expect(countryCard).toBeTruthy();
    expect(countryCard).toMatchSnapshot();
  });
});
