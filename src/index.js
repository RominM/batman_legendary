// SETTINGS
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// STYLE
import './style/main.scss';
// COMPONENTS
import Header from './components/layout/Header';
import Home from './pages/Home';
import Characters from './pages/Characters';
import About from './pages/About';
import Univers from './pages/Univers';
import Error from './pages/Error';
// import Rain from './components/Rain';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/univers" element={<Univers />} />
          <Route path="/about" element={<About />} />
          <Route path="/not-found" element={<Error />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
