import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(prevMode => {
      const newMode = prevMode === 'dark' ? 'light' : 'dark';
      document.body.style.backgroundColor = newMode === 'dark' ? 'black' : 'white';
      return newMode;
    });
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar progress={progress} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="technology" mode={mode} country="in" category="technology" />} />
          <Route exact path="/Business" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="Business" mode={mode} country="in" category="Business" />} />
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="Entertainment" mode={mode} country="in" category="Entertainment" />} />
          <Route exact path="/General" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="General" mode={mode} country="in" category="General" />} />
          <Route exact path="/Health" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="Health" mode={mode} country="in" category="Health" />} />
          <Route exact path="/Science" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="Science" mode={mode} country="in" category="Science" />} />
          <Route exact path="/Sports" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="Sports" mode={mode} country="in" category="Sports" />} />
          <Route exact path="/Technology" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="Technology" mode={mode} country="in" category="Technology" />} />
        </Routes>
        <Footer mode={mode} />
      </Router>
    </>
  );
};

export default App;
