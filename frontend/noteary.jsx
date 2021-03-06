import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';


window.store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    const initialState = {
      session: {
        currentUser: window.currentUser
      }
    };
    window.store = configureStore(initialState);
  } else {
    window.store = configureStore();
  }
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
