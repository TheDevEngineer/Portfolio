import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ToTopArrow from './ToTopArrow';
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
      <ToTopArrow mobileNavOpen={mobileNavOpen} />
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
                sourceCodeBoxes={[
                  {
                    boxName: 'SourceCodeFlexbox',
                    boxDescription: 'Shows how flexbox is used for layout.',
                    boxLanguage: 'css',
                  },
                  {
                    boxName: 'SourceCodeConverter',
                    boxDescription: 'Used to convert css to html.',
                    boxLanguage: 'tsx',
                  },
                ]}
              />
            }
          />
          <Route
            path='/cataclysm'
            element={
              <Page
                title='Cataclysm'
                description='This was my final group project of Univiersity, a 2.5D couch co-op multiplayer game. You the player must venture round a 3D space ship solving a mix of 3D and 2D puzzles to each from unique monsters which are represented in the 2D realm.'
                context='REPLACE'
                features={[
                  {
                    imageLink: 'assets/images/myImages/TreeViewPNG.png',
                    title: 'yes',
                    description: 'yes',
                    features: ['yes'],
                  },
                ]}
                sourceCodeBoxes={[
                  {
                    boxName: 'SourceCodeFlexbox',
                    boxDescription: 'Shows how flexbox is used for layout.',
                    boxLanguage: 'css',
                  },
                  {
                    boxName: 'SourceCodeConverter',
                    boxDescription: 'Used to convert css to html.',
                    boxLanguage: 'tsx',
                  },
                ]}
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
