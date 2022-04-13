import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import './services/firebase';
import './styles/global.scss';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render( <App />)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
  
 );






