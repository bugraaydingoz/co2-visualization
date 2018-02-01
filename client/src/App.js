import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProgressBar } from './components/ProgressBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProgressBar />
        <Footer />
      </div>
    );
  }
}

export default App;
