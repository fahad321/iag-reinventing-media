import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './pages/HomePage';
import { ParallaxProvider } from 'react-scroll-parallax';

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
    </ParallaxProvider>
  );
};

export default App;
