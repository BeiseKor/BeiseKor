import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registrace = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            setError('Zadejte platnou e-mailovou adresu.');
            return;
        }
        if (password.length < 6) {
            setError('Heslo musí obsahovat alespoň 6 znaků.');
            return;
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Registrace úspěšná', data);
                navigate('/home'); 
            } else {
                throw new Error(data.message || 'Registrace se nezdařila');
            }
        } catch (err) {
            setError(err.message);
            console.error('Chyba registrace:', err);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Registrace</h2>
                    <p>Zadejte všechna pole pro vytvoření nového účtu.</p>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <label htmlFor="name">Jméno:</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Emailová adresa:</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Heslo:</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Registrovat</button>
                        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registrace;