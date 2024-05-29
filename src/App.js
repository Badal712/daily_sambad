import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  // testing Dark Mode
  constructor(props){
    super(props);
    this.state = {
      mode: 'light'
    };
  }
  toggleMode = () => {
    this.setState(prevState => ({
      mode: prevState.mode === 'dark' ? 'light' : 'dark',
      
    }), () =>{
      document.body.style.backgroundColor = this.state.mode === 'dark' ? 'black' : 'white';
    });
  }
//end of dark mode
  render() {
    const { mode } = this.state;
    return (
      <>
        <Router>
          <Navbar mode={mode} toggleMode={this.toggleMode}/>
          <Routes>
            <Route exact path="/" element={<News path="/" pageSize={8} key="technology" mode={mode} country="in" category="technology"/>}></Route>
            <Route exact path="/Business" element={<News path="/" pageSize={8} key="Business" mode={mode} country="in" category="Business"/>}></Route>
            <Route exact path="/Entertainment" element={<News path="/" pageSize={8} key="Entertainment" mode={mode} country="in" category="Entertainment"/>}></Route>
            <Route exact path="/General" element={<News path="/" pageSize={8} key="General" mode={mode} country="in" category="General"/>}></Route>
            <Route exact path="/Health" element={<News path="/" pageSize={8} key="Health" mode={mode} country="in" category="Health"/>}></Route>
            <Route exact path="/Science" element={<News path="/" pageSize={8} key="Science" mode={mode} country="in" category="Science"/>}></Route>
            <Route exact path="/Sports" element={<News path="/" pageSize={8} key="Sports" mode={mode} country="in" category="Sports"/>}></Route>
            <Route exact path="/Technology" element={<News path="/" pageSize={8} key="Technology" mode={mode} country="in" category="Technology"/>}></Route>
          </Routes> 
          <Footer mode={mode}/>
        </Router>
      </>
    )
  }
}