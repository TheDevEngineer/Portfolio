import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import { useState } from 'react';

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
          <Route
            path='/'
            element={<h1 style={{ marginTop: '200px' }}>Hello World</h1>}
          />
          <Route
            path='/yes'
            element={<h1 style={{ marginTop: '200px' }}>Goodbye</h1>}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
