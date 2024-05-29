import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import './Navbar.css';
import logoSrc from "../components/Logo/Daily Sambad Light.png";

export class Navbar extends Component {
  render() {
    const { mode } = this.props;
    const labelText = mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode';
    const sambadLogo = logoSrc;
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${this.props.mode === 'light'?'dark':'primary'}`}  >
            <div className="container-fluid">
              <img src={sambadLogo} className='LogoImage' alt='Logo'/>
                <Link className="navbar-brand" to="/" style={{color: this.props.mode === 'light' ? 'light' : 'dark'}}>Daily Sambad</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className= "navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/General">General</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>
                    </ul>
                    <div className={`form-check form-switch text-${this.props.mode==='light'?'light':'light'}`}>
                      <input className="form-check-input" onClick={this.props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{labelText}</label>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
