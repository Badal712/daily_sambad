import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
//import Footer from './components/Footer';

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
        <Navbar mode={mode} toggleMode={this.toggleMode}/>
        <News pageSize={8} mode={mode}/>
        {/* <Footer mode={mode}/> */}
      </>
    )
  }
}
