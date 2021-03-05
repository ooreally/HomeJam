import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import navbar from './components/navbar/navbar';
// import navbar from './components/navbar/navbar';
import './index.css';
// import navbar from './components/navbar/navbar';
import reportWebVitals from './reportWebVitals';
// import navbar from './components/navbar/navbar';

ReactDOM.render(
  // <React.StrictMode>
    <App/>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
