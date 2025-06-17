import { useEffect, useState } from 'react';
import Header from './Header';
import ToTopArrow from './ToTopArrow';
import MobileNav from './MobileNav';

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? 'hidden' : '';
  }, [mobileNavOpen]);

  return (
    <div>
      <Header
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <MobileNav
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <ToTopArrow mobileNavOpen={mobileNavOpen} />
    </div>
  );
}

export default App;
