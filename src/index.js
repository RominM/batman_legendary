import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import Home from './pages/Home';
import Header from './components/layout/Header';
// import Rain from './components/Rain';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        {/* <Rain /> */}
        <Home />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
