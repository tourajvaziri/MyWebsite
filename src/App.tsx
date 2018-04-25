import * as React from 'react';
import './App.css';
import Home from './Home';
import Footer from './Footer';
import Resume from './Resume';
import Expertise from './Expertise';

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <Home />
        </div>
        <div className="section-expertise">
          <Expertise />
        </div>
        <div className="section-expertise">
          <Resume />
        </div>
        <div className="section-expertise">
          <Footer />
        </div>
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.tsx</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
