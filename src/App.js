import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  
pageSize = 8;
apiKey = process.env.REACT_APP_NEWS_API


  // testing Dark Mode
  constructor(props){
    super(props);
    this.state = {
      mode: 'light',
      progress : 0
    };
  }

  setProgress = (progress) => {
    this.setState({progress})
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
          <LoadingBar
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} path="/" pageSize={this.pageSize} apiKey={this.apiKey} key="technology" mode={mode} country="in" category="technology"/>}></Route>
            <Route exact path="/Business" element={<News setProgress={this.setProgress} path="/" pageSize={this.pageSize} apiKey={this.apiKey} key="Business" mode={mode} country="in" category="Business"/>}></Route>
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} path="/" pageSize={this.pageSize} apiKey={this.apiKey} key="Entertainment" mode={mode} country="in" category="Entertainment"/>}></Route>
            <Route exact path="/General" element={<News setProgress={this.setProgress} path="/" pageSize={this.pageSize} apiKey={this.apiKey} key="General" mode={mode} country="in" category="General"/>}></Route>
            <Route exact path="/Health" element={<News setProgress={this.setProgress} path="/" pageSize={this.pageSize} apiKey={this.apiKey} key="Health" mode={mode} country="in" category="Health"/>}></Route>
            <Route exact path="/Science" element={<News setProgress={this.setProgress} path="/" pageSize={this.pageSize} apiKey={this.apiKey} key="Science" mode={mode} country="in" category="Science"/>}></Route>
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} path="/" pageSize={this.pageSize} apiKey={this.apiKey} key="Sports" mode={mode} country="in" category="Sports"/>}></Route>
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} path="/" pageSize={this.pageSize} apiKey={this.apiKey} key="Technology" mode={mode} country="in" category="Technology"/>}></Route>
          </Routes> 
          <Footer mode={mode}/>
        </Router>
      </>
    )
  }
}