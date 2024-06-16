import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MySnippets.css'; 

const MySnippets = () => {
    const [snippets, setSnippets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSnippets = async () => {
            try {
                const response = await axios.get('http://localhost:8919/api/my-snippets');
                setSnippets(response.data);
                setLoading(false);
            } catch (error) {
                const message = error.response ? error.response.data.message : error.message;
                setError('Failed to load snippets. Error: ' + message);
                setLoading(false);
            }
        };

        fetchSnippets();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h5 className='snip'>My Snippets</h5>
            {snippets.length > 0 ? (
                <ul>
                    {snippets.map(snippet => (
                        <li key={snippet.id}>
                            <button className='but' onClick={() => console.log('Snippet:', snippet.name)}>
                                <h3>{snippet.name}</h3>
                                <pre><code>{snippet.code}</code></pre>
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='tex'>No snippets to display.</p>
            )}
        </div>
    );
};

export default MySnippets;
