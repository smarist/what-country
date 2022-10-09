import { useReducer, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCountryList } from '../../../redux/actions/countryAction';
import { setIsLoading } from '../../../redux/actions/appAction';
import countryServices from '../../../Services/country.services';
import { debounceHandler } from '../../../utils/helpers';

function useHome() {
  const initState = {
    searchValue: '',
    selectedValue: '',
  };

  const dispatcher = useDispatch();
  const [state, dispatch] = useReducer((stat, value) => ({ ...stat, ...value }), initState);

  const {
    searchValue,
    selectedValue,
  } = state;

  const onSearch = event => {
    const searchText = event.target.value;
    dispatch({ searchValue: searchText });
    console.log('onSearchiing');
    debounceHandler(() => {
      setIsLoading(true)(dispatcher);
      countryServices.getSearchCountryNameList(searchValue)
        .then((res) => {
          setCountryList(res);
          setIsLoading(false)(dispatcher);
          console.log('onSearchiin5');
        })
        .catch(() => {});
    }, 500);
  };
  console.log(searchValue);

  useEffect(() => {
    setIsLoading(true)(dispatcher);
    if (selectedValue === 'all') {
      countryServices.getCountryList(selectedValue)
        .then((res) => {
          setCountryList(res)(dispatcher);
          setIsLoading(false)(dispatcher);
        })
        .catch(() => {});
    } else {
      countryServices.getCountryRegionList(selectedValue)
        .then((res) => {
          setCountryList(res)(dispatcher);
          setIsLoading(false)(dispatcher);
        })
        .catch(() => {});
    }
  }, [selectedValue]);

  return {
    dispatch,
    state,
    onSearch,
  };
}

export default useHome;
