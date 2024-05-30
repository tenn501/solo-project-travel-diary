import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../client/App.jsx';
import diary from '../client/diary';

// import '../client/stylesheets/style.scss';

const root = createRoot(document.getElementById('root'));
root.render(

  <Provider store={diary}>
    <App />
  </Provider>

  //document.getElementById('root')
);