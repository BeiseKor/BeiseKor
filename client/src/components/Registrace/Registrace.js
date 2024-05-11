import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registrace() {
  const [name, setName] = useState(''); // 'name' je název proměnné pro uchovávání jména
  const [email, setEmail] = useState(''); // 'email' je název proměnné pro uchovávání emailu
  const [password, setPassword] = useState(''); // 'password' je název proměnné pro uchovávání hesla
  const [error, setError] = useState(''); // 'error' je název proměnné pro uchovávání chybové zprávy
  const navigate = useNavigate(); // 'navigate' je název funkce pro navigaci v aplikaci

  const handleRegister = async (event) => {
    event.preventDefault();
    // Logika odeslání dat pro registraci
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }) // Přidáno 'name' do JSON.stringify
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registrace úspěšná', data);
        navigate('/login');  // Přesměrovat na stránku přihlášení po registraci
      } else {
        throw new Error(data.message || 'Registrace se nezdařila');
      }
    } catch (err) {
      setError(err.message);
      console.error('Chyba registrace:', err);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label htmlFor="name">Jméno</label> {/* Přidáno 'htmlFor' */}
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Emailová adresa</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Heslo</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Registrovat</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}

export default Registrace;