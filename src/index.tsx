import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/redux/store';
import App from './app/App';
import './assets/sass/main.scss';
import LoadingScreen from './app/layouts/loading-screen/LoadingScreen';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingScreen/>} persistor={persistor}>
      <Router>
        <App/>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);