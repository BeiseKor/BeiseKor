import React, { useState } from 'react';
import axios from 'axios';
import '../styles/NewProject.css';

const NewProject = ({ onProjectCreated }) => {
    const [projectName, setProjectName] = useState('');
    const [error, setError] = useState(null);

    const handleCreateProject = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8919/api/projects/create-project", {
                name: projectName,
            });
            alert('Projekt byl úspěšně zaveden: ' + response.data.project.name);
            setProjectName('');
            onProjectCreated();
        } catch (error) {
            console.error('Chyba při vytváření projektu: ', error);
            setError('Chyba při vytváření projektu: ' + (error.response ? error.response.data.message : error.message));
        }
    };

    return (
        <div className="container">
            <h5 className='text'>New Project</h5>
            <form onSubmit={handleCreateProject}>
                <input className='input'
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Project name"
                />
                <button type="submit" className="butt">Create</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default NewProject;
