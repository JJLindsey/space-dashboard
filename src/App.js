import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NasaProvider } from './context/NasaContext'
import ThemeToggle from './components/ThemeToggle';
import DashboardView from './views/DashboardView';
//import './App.css';

function App() {
  return (
    <ThemeToggle>
      <NasaProvider>
        <Router>
          <Routes>
            <Route  exact path="/" element={<DashboardView />} />
            <Route path="/dashboard" element={<DashboardView />} />
          </Routes>
        </Router>
      </NasaProvider>
    </ThemeToggle>
  );
}

export default App;
