import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import Index from './Index';
import './styles/general.css';

const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? 'hidden' : '';
  }, [mobileNavOpen]);

  return (
    <>
      <Header
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <MobileNav
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/portfolio' element={<h1>Goodbye</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
