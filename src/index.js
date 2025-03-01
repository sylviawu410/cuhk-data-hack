import {React} from 'react';
import ReactDOM from 'react-dom/client';
import {  HashRouter,  Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home.js'
import Location from './Location.js'
import TopMatch from './TopMatch.js';
import About from './About.js';
import reportWebVitals from './reportWebVitals';


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-match" element={<TopMatch />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();