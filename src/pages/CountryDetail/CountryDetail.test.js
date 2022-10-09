import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import CountryDetail from './CountryDetail';
import { withThemeAndStore } from '../../tests/helpers';

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
  setCountryNameList: jest.fn(),
  country: [],
};

describe('Testing Country Detail Page', () => {
  it('Should render successfully', () => {
    const { queryByTestId } = render(withThemeAndStore(CountryDetail, props));

    const countryDetail = queryByTestId('country-detail');
    expect(countryDetail).toBeTruthy();
    expect(countryDetail).toMatchSnapshot();
  });
});

// describe('Testing Country Detail Page', () => {
//     it('Should render successfully', () => {
//       const { queryByTestId } = render(
//         withThemeAndStore(<Router>
//           <CountryDetail />
//         </Router>, props),
//       );

//       const countryDetail = queryByTestId('country-detail');
//       expect(countryDetail).toBeTruthy();
//       expect(countryDetail).toMatchSnapshot();
//     });
//   });
