import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', loginData);
      console.log('Пользователь вошел в систему', response);

    } catch (error) {
      console.error('Ошибка входа:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input type="text" name="username" value={loginData.username} onChange={handleChange} />
      </label>
      <label>Password:
        <input type="password" name="password" value={loginData.password} onChange={handleChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
