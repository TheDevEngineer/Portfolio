import { useEffect, useState } from 'react';
import Header from './Header';
import ToTopArrow from './ToTopArrow';

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? 'hidden' : '';
    setMobileNavOpen(mobileNavOpen);
  }, [mobileNavOpen]);

  return (
    <div>
      <Header
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <ToTopArrow mobileNavOpen={mobileNavOpen} />
    </div>
  );
}

export default App;
