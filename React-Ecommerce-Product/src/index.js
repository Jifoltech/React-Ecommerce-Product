import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// const header = <h1>This is my first React App</h1>;

// console.log(header);
const Root= ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);

// working with pure JS..
// const div=document.getElementById('root');
// div.append(App());