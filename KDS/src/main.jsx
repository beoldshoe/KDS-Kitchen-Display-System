import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CookingPage from './pages/CookingPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookingPage />
  </StrictMode>
);
