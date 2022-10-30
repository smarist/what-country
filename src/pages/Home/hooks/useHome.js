import { useReducer, useEffect, useCallback } from 'react';
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
    selectedValue,
  } = state;

  useEffect(() => {
    setIsLoading(true)(dispatcher);
    countryServices.getCountryList()
      .then((res) => {
        setCountryList(res.slice(0, 50))(dispatcher);
        setIsLoading(false)(dispatcher);
      })
      .catch(() => {});
  }, []); // eslint-disable-line

  const handleSearch = useCallback(({
    search,
  }) => {
    countryServices.getSearchCountryNameList(search)
      .then((res) => {
        setCountryList(res)(dispatcher);
        setIsLoading(false)(dispatcher);
      })
      .catch(() => {});
  }, []);

  const onSearch = event => {
    const searchText = event.target.value;
    dispatch({ searchValue: searchText });
    debounceHandler(() => {
      setIsLoading(true)(dispatcher);
      handleSearch({
        search: searchText,
      });
    }, 500);
  };

  useEffect(() => {
    setIsLoading(true)(dispatcher);
    if (!selectedValue) { return; }
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
