import React, { useState } from 'react';

function NewProject() {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Stav pro indikaci načítání

  const validateForm = () => {
    if (projectName.trim().length < 5) {
      setError('Název projektu musí obsahovat alespoň 5 znaků.');
      return false;
    }
    if (projectDescription.trim().length < 10) {
      setError('Popis projektu musí obsahovat alespoň 10 znaků.');
      return false;
    }
    setError('');
    return true;
  };

  const handleCreateProject = async (event) => {
    event.preventDefault();
    if (!validateForm()) return; // Kontrola dat formuláře před odesláním
    setIsLoading(true); // Nastavení stavu načítání
    try {
      const response = await fetch('/api/create-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectName, projectDescription })
      });
      const data = await response.json();
      setIsLoading(false); // Zrušení stavu načítání
      if (response.ok) {
        console.log('Projekt úspěšně vytvořen', data);
        // Zde implementujte přesměrování nebo jinou logiku
      } else {
        throw new Error(data.message || 'Vytvoření projektu se nezdařilo');
      }
    } catch (err) {
      setError(err.message);
      console.error('Chyba při vytváření projektu:', err);
    }
  };

  return (
    <div>
      <h2>Vytvořit nový projekt</h2>
      <form onSubmit={handleCreateProject}>
        <label htmlFor="projectName">Název projektu:</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        <label htmlFor="projectDescription">Popis projektu:</label>
        <textarea
          id="projectDescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Vytváření...' : 'Vytvořit projekt'}
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
}

export default NewProject;