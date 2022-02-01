import React from 'react';
import { Footer, Blog, Possibility, Features, GP3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GP3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}
