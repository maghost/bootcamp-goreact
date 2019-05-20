import dotenv from 'dotenv';

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './config/reactotron';
import store from './store';

import Routes from './routes';

import 'font-awesome/css/font-awesome.css';
import './styles.css';

dotenv.config();

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <ToastContainer autoClose={5000} />
    </Fragment>
  </Provider>
);

export default App;
