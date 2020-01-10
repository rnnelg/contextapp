import React from 'react';
import Navbar from './component/Navbar';
import BookList from './component/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './component/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
