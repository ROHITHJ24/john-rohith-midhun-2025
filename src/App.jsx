// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        {/* Main container with global background and text colors */}
        <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200 transition-colors duration-500">
          <Header />
          
          <main className="pt-20"> {/* Add padding top for fixed header */}
            <Home /> {/* All sections are on one page, so Home acts as the main container */}
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;