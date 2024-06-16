import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AllProjects.css';

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:8919/api/projects/all-projects");
            setProjects(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Chyba při přijímání projektů: ', error);
            setError('Chyba při přijímání projektů: ' + (error.response ? error.response.data.message : error.message));
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h5 className='text'>All Projects</h5>
            <button onClick={fetchProjects} className="btn">Projects</button>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {!loading && !error && projects.length > 0 && (
                <ul>
                    {projects.map(project => (
                        <li key={project.id}>{project.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AllProjects;
