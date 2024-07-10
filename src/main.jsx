import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import NavBar from './components/NavBar'; 
import About from './components/About';
import Projects from './components/Projects';
// import OpenSource from './components/OpenSource';
import Layout from './Layout'

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        {/* <Route path="open-source" element={<Opensource />} /> */}
        {/* <Route path="projects" element={<Projects />} /> */}
        {/* Add other routes here */}
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
