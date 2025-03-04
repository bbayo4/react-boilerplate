import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/app.jsx';

const rootEl = document.getElementById('root');

const renderComponent = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>
    , rootEl
  );
};

renderComponent(App);

if (module.hot) {
  module.hot.accept('./components/app.jsx', () => {
    renderComponent(App);
  });
}