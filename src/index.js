import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/index';
import App from './App';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line
String.prototype.toSentenceCase = function () {
  const value = String(this);
  return value
    .toLowerCase()
    .replace(/^./g, this[0].toUpperCase());
};

// eslint-disable-next-line
String.prototype.toTitleCase = function () {
  const value = String(this);
  return value
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
