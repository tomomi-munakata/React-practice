import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './components/Menu';
import Home from './components/Home';
import Work from './components/Work';
import Skill from './components/Skill.jsx';
import About from './components/About';
import Contact from './components/Contact';

ReactDOM.render(
   <React.StrictMode>  
   <Menu />
   <Home />
   <Work />
   <Skill />
   <About />
   <Contact />
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
