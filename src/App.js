import React, { useState } from 'react';
import Navigation from './components/nav/index.js';
import Home from './components/pages/Home';
import MyWork from './components/pages/MyWork';
import ContactMe from './components/pages/ContactMe';
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentPage, handlePageChange] = useState('Home')

  const renderPage = () => {
    
    switch (currentPage) {
      case 'Home':
        return <Home/>;

      case 'Navigation':
        return <Navigation/>;
  
      case 'My Work':
        return  <MyWork />;
  
      case 'Contact Me':
        return  <ContactMe />;
  
      default:
        return <Home currentPage={currentPage} handlePageChange={handlePageChange}/> ;
    }
  }

  return (
    <div>
      <header className="navigation">
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      </header>
      <div> {renderPage(currentPage)}</div>
    </div>

  )};

export default App;
