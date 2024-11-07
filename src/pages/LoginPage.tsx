import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (username === 'Accenture' && password === 'Song2024') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-accenturePrimary text-white login-page">
      <div className="w-full max-w-md">
        <form className="bg-gray-800 p-6 rounded-lg mb-4" onSubmit={handleLogin}>
          <h1 className="text-2xl mb-4">Accenture Song</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 mb-4 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 mb-4 w-full"
          />
          <button type="submit" className="w-full p-2 bg-accentureSecondary login-text">
            Login
          </button>
        </form>
        <h3 className="text-2xl text-center mt-4 text-white whitespace-nowrap text-ellipsis">
          For best experience please view on Desktop.
        </h3>
      </div>
    </div>
  );
};

export default LoginPage;