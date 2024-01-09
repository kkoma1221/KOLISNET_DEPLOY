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
import currentBook from './reducer/currentBook.js';
import cart from './reducer/cart.js';
import SignUpModal from './reducer/isSignUpModal.js';
import address from './reducer/address.js';
import isAddress from './reducer/isAddress.js';
import SignInModal from './reducer/isSignInModal.js';
import logInInfo from './reducer/userSignIn.js';

let store = configureStore({
  reducer: {
    adminSignIn,
    confirmModal,
    bookData,
    searchData,
    searchSort,
    currentBook,
    cart,
    SignUpModal,
    address,
    isAddress,
    SignInModal,
    logInInfo
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