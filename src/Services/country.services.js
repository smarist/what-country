import { request } from './api';

const URL = {
  getCountryList: 'https://restcountries.com/v3.1/all',
  getCountryRegionList: (regionId) => `https://restcountries.com/v3.1/region/${regionId}`,
  getCountryNameList: (nameId) => `https://restcountries.com/v3.1/name/${nameId}?fullText=true`,
  getSearchCountryNameList: (name) => `https://restcountries.com/v3.1/name/${name}`,
};

function getCountryList() {
  return request(URL.getCountryList, {}, 'GET');
}

function getCountryRegionList(regionId) {
  return request(URL.getCountryRegionList(regionId), {}, 'GET');
}

function getCountryNameList(nameId) {
  return request(URL.getCountryNameList(nameId), {}, 'GET');
}

function getSearchCountryNameList(name) {
  return request(URL.getCountryNameList(name), {}, 'GET');
}

export default {
  getCountryList,
  getCountryNameList,
  getCountryRegionList,
  getSearchCountryNameList,
};
