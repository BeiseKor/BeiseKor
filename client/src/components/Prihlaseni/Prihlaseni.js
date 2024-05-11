import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Prihlaseni() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    // Здесь вы добавите логику отправки данных на сервер
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Успешный вход', data);
        navigate('/dashboard');  // Перенаправление на дашборд после успешного входа
      } else {
        throw new Error(data.message || 'Не удалось войти');
      }
    } catch (err) {
      setError(err.message);
      console.error('Ошибка входа:', err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Log in</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}

export default Prihlaseni;

