import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NasaProvider } from './context/NasaContext'
import './App.css';

function App() {
  return (
    <NasaProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<Layout />}> */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          {/* <Route path="/dashboard" element={<DashboardView />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </NasaProvider>
  );
}

export default App;
