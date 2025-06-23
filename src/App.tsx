import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ToTopArrow from './ToTopArrow';
import Index from './Index';
import Page from './Page';
import CodeConverter from './CodeConverter';
import './styles/general.css';
import ScrollToAnchor from './ScrollToAnchor';

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
                images={[
                  {
                    imageLink: 'assets/images/file-type-html.svg',
                    alt: 'html Icon',
                  },
                  {
                    imageLink: 'assets/images/file-type-css.svg',
                    alt: 'css Icon',
                  },
                  {
                    imageLink: 'assets/images/file-type-js-official.svg',
                    alt: 'js Icon',
                  },
                  {
                    imageLink:
                      'assets/images/file-type-typescript-official.svg',
                    alt: 'ts Icon',
                  },
                  {
                    imageLink: 'assets/images/Git-Icon-1788C.png',
                    alt: 'git Icon',
                  },
                  {
                    imageLink: 'assets/images/file-type-reactjs.svg',
                    alt: 'reactjs Icon',
                  },
                ]}
                context="I created this project to move away from using Wix to host my portfolio as it didn't allow for SEO. Also it has been a fun project to learn new coding languages and frameworks which were required to make these pages dynamic."
                githubLink='https://github.com/IAmAGameDev/Portfolio'
                sourceCodeBoxes={[
                  {
                    boxName: 'SourceCodeFlexbox',
                    boxDescription:
                      'My most used thing in this project is the flexbox which uses html and css. Using a flex box is how I achieved the layout for the box below, and many other layout designs on these pages.',
                    boxLanguage: 'css',
                  },
                  {
                    boxName: 'SourceCodeConverter',
                    boxDescription:
                      "This custom function that I was messing around with is used to convert css to html. I had previously done this in Unity C# to convert my C# code to html which is done via the same effect, making sure that the code that we are converting isn't inside of a comment (which this doesn't do). By using substring, I can insert a <span className'hello'>hello</span> to colourise the text differently with css.",
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
                description='This was my final group project of University, a 2.5D couch co-op multiplayer game. You the player must venture round a 3D space ship solving a mix of 3D and 2D puzzles to each from unique monsters which are represented in the 2D realm.'
                videoLink='assets/videos/myVideos/Bloom.mp4'
                context='This project helped develop my team work skills and communication. I advanced my knowledge further into the C# language and object-oriented programming (OOB). By communicating effectively as a team we were able to tell what needed implementing next, what the bugs/problems were and how to correctly manage our time to reach the hand in target.'
                sourcePrivate={true}
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
                    boxDescription: 'REPLACE',
                    boxLanguage: 'REPLACE',
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
