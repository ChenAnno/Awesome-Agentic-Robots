import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../app/globals.css';
import Home from '../app/page';

const root = document.getElementById('root');

if (!root) throw new Error('Missing application root');

createRoot(root).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
