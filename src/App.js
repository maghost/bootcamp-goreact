import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store';

console.tron.log('Testando');

const App = () => (
  <Provider store={store}>
    <h1>Hello World</h1>
  </Provider>
);

export default App;
