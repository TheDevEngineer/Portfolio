import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import HeaderManager from './HeaderManager.tsx';
import Footer from './Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderManager />
  </StrictMode>
);

createRoot(document.getElementById('footerHolder')!).render(
  <StrictMode>
    <Footer />
  </StrictMode>
);
