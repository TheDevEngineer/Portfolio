import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import Index from './Index';
import ScrollToAnchor from './ScrollToAnchor';
import Page from './Page';
import CodeConverter from './CodeConverter';
import './styles/general.css';

const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? 'hidden' : '';
  }, [mobileNavOpen]);

  return (
    <>
      <ScrollToAnchor />
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
          <Route
            path='/portfolio'
            element={
              <Page
                title='My Portfolio'
                description='This portfolio is custom coded in HTML, CSS and JavaScript, It also
          uses TypeScript and React. I used to host my old portfolio on Wix,
          however, now I am able to use GitHub pages to host the custom site.'
                context="I created this project to move away from using Wix to host my portfolio as it didn't allow for SEO. Also it has been a fun project to learn new coding languages and frameworks which were required to make these pages dynamic."
                githubLink='https://github.com/IAmAGameDev/Portfolio'
                itchioLink='https://github.com/IAmAGameDev/Portfolio'
                itchioIFrame='https://itch.io/embed/3463919?border_width=5&amp;dark=true'
                sourceCodes={['SourceCodeFlexBox']}
              />
            }
          />
          <Route path='/yes' element={<CodeConverter />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
