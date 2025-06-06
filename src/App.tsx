import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import Sidebar from './components/Sidebar';
import './App.css'; // Make sure to import your stylesheet

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <div className="map-wrapper">
        <MapComponent 
          sidebarOpen={sidebarOpen} 
          onToggleSidebar={handleToggleSidebar} 
        />
      </div>
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={handleToggleSidebar} 
      />
    </div>
  );
};

export default App;