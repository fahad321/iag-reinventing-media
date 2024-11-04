import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '../src/styles/index.scss'; // or the path to your main CSS file

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
