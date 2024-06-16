import React, { useState, useEffect } from 'react';
import '../styles/MainContent.css';
import Sidebar from './SideBar.js'; 

const MainContent = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="main-container">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="main-content">
                <button className="open-btn" onClick={toggleSidebar}>☰</button>
                <h1>Main Content</h1>
                <DateTime/>
                <p>Some content in the main area...</p>

            </div>
        </div>
    );
};
const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date()); 

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); 
  }, []);

  return (
    <div>
      <p>{currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}</p>
    </div>
  );
};



export default MainContent;
