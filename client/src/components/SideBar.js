import React, { useState } from 'react';
import '../styles/SideBar.css';
import CodeComments from './CodeComments'; 
import NewProject from './NewProject';
import AddSnippet from './AddSnippet';
import MySnippets from './MySnippets';
import Tags from './Tags';
import AllProjects from './AllProjects';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [refreshProjects, setRefreshProjects] = useState(false);

    const handleProjectCreated = () => {
        setRefreshProjects(!refreshProjects);
    };
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <h2 className='side'>Sidebar</h2>
                <div className="app-container">
                    <NewProject onProjectCreated={handleProjectCreated} />
                    <AllProjects key={refreshProjects} />
                </div>
                <AddSnippet />
                <button className='but'><MySnippets/></button>
                <button className='but'><CodeComments /></button>
                <button className='but'><Tags/></button>
        </div>
    );
};

export default Sidebar;
