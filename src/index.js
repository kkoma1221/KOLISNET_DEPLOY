import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComponent from './WrapComponent.jsx';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import adminSignIn from './reducer/adminSignIn.js';
import confirmModal from './reducer/confirmModal.js';
import bookData from './reducer/bookData.js';
import searchData from './reducer/searchData.js';
import searchSort from './reducer/searchSort.js';

let store = configureStore({
  reducer: {
    adminSignIn,
    confirmModal,
    bookData,
    searchData,
    searchSort
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrapComponent />
    </Provider>
  </React.StrictMode>
);