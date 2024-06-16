import React, { useState, useEffect } from 'react';
import '../styles/Tags.css';

const Tags = () => {
  const [tags, setTags] = useState(() => {
    // Načítání tagů z lokálního úložiště při inicializaci
    const savedTags = localStorage.getItem('tags');
    return savedTags ? JSON.parse(savedTags) : [];
  });
  const [newTag, setNewTag] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Ukládání tagů do lokálního úložiště při každé změně
    localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  const handleAddTag = (event) => {
    event.preventDefault();
    if (!newTag.trim()) {
      setError('Tag nesmí být prázdný');
      return;
    }
    if (tags.includes(newTag)) {
      setError('Tag již existuje');
      return;
    }
    setTags(prevTags => [...prevTags, newTag.trim()]);
    setNewTag('');
    setError('');
  };
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleTagChange = (event) => {
    setNewTag(event.target.value);
    if (error) setError('');
  };

  return (
    <div>
      <h5 className='textt'>Tags</h5>
      <form onSubmit={handleAddTag} className="styles.form">
        <input 
          type="text"
          placeholder="Přidej tag"
          value={newTag}
          onChange={handleTagChange}
          className="inputt"
        />
        <button  type="submit" className="buttonn">Přidat</button>
      </form>
      {error && <p className="styles.error">{error}</p>}
      <ul className="styles.list">
        {tags.map((tag, index) => (
          <li key={index} className="styles.tagItem">
            {tag}
            <button onClick={() => handleRemoveTag(tag)} className="styles.deleteButton">Odstranit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
