import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/general.css';

const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <Header
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<h1>Hello World</h1>} />
          <Route path='/yes' element={<h1>Goodbye</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
