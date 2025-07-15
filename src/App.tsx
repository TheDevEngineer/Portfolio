import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ToTopArrow from './ToTopArrow';
import Index from './Index';
import Page from './Page';
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
                    boxTitle: 'index.css',
                    boxImg: 'assets/images/file-type-css.svg',
                    boxImgAlt: 'css Icon',
                    boxLanguage: 'css',
                  },
                  {
                    boxName: 'SourceCodeConverter',
                    boxDescription:
                      "This custom function that I was messing around with is used to convert css to html. I had previously done this in Unity C# to convert my C# code to html which is done via the same effect, making sure that the code that we are converting isn't inside of a comment (which this doesn't do). By using substring, I can insert a <span className'hello'>hello</span> to colourise the text differently with css.",
                    boxTitle: 'CodeConverter.tsx',
                    boxImg: 'assets/images/file-type-typescript-official.svg',
                    boxImgAlt: 'typescript Icon',
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
                videoIFrameLink='https://www.youtube-nocookie.com/embed/6_uGLtb_7vo'
                context='This project helped develop my team work skills and communication. I advanced my knowledge further into the C# language and object-oriented programming (OOB). By communicating effectively as a team we were able to tell what needed implementing next, what the bugs/problems were and how to correctly manage our time to reach the hand in target.'
                sourcePrivate={true}
                features={[
                  {
                    imageLink: 'assets/images/myImages/Cataclysm2.5D.webp',
                    title: '2.5D Player View:',
                    description:
                      '2D Character within a 3D world. Fun integration challenge with multiple cameras, animations and enemies.',
                    features: ['2D Character,', '3D World.'],
                  },
                  {
                    imageLink: 'assets/images/myImages/CataclysmMinigames.webp',
                    title: 'Minigames:',
                    description:
                      'Mix of both 2D and 3D minigames, my involvement within the team was to create the base mechanics allowing us to customise later.',
                    features: [
                      'Vent Screw Task,',
                      'Navigation Ship Flying Task.',
                    ],
                  },
                  {
                    imageLink:
                      'assets/images/myImages/CataclysmMinigamesTwo.webp',
                    title: 'More Minigames:',
                    description:
                      'My second favourite minigame is the morse code. This was done by translating dots and dashes via a dictonary lookup into letters.',
                    features: [
                      'Reboot Pod Systems Task,',
                      'Morse Code Send Task.',
                    ],
                  },
                ]}
                sourceCodeBoxes={[
                  {
                    boxName: 'SourceCodeHealthManagerSO',
                    boxDescription:
                      'Below is a custom ScriptableObject that was used to handle player health. In a parent player script, we can create an instance of this ScriptableObject per player. This allows us to call DecreaseHealth whenever we collide with an enemy which will Invoke a healthChangeEvent method to tell effects/the UIManager to update the health, and flash a blood effect on screen.',
                    boxTitle: 'HealthManagerScriptableObject.cs',
                    boxImg: 'assets/images/csharpIcon.png',
                    boxImgAlt: 'csharp Icon',
                    boxLanguage: 'csharp',
                  },
                  {
                    boxName: 'SourceCodeRenderEnablerEditor',
                    boxDescription:
                      'This script was used to disable and enable the 3D world before playing. This is because we were loading it during runtime with colliders on the player, whilst fading in the blocks to create an illusion of that the player no longer knows their own spaceship. So, for testing and development, we would need to swap between seeing the world and hiding it depending on if we were playtesting or developing the scene therefore, to do this easier, I created this script.',
                    boxTitle: 'RenderEnablerEditor.cs',
                    boxImg: 'assets/images/csharpIcon.png',
                    boxImgAlt: 'csharp Icon',
                    boxLanguage: 'csharp',
                  },
                ]}
              />
            }
          />
          <Route
            path='/styledhierarchy'
            element={
              <Page
                title='StyledHierarchy'
                description='Ever get bored of the default Unity look? This project solves that by overlapping the default Hierarchy with a custom one. With features such as: tree view, headers, displayed tags, layers and components.'
                videoLink='assets/videos/myVideos/StyledHierarchy.mp4'
                context='I created this project as I was recommended a Unity Package on the Asset store that is somewhat alike but paid. I thought that it would be a good challenge to create a package myself as it would educate me and can be used in all my future projects. It is easily customisable and I was able to cache GameObject components to save resources. I did look at pre-existing GitHub repositories to help me which were under the MIT license.'
                githubLink='https://github.com/IAmAGameDev/Portfolio'
                itchioLink='https://iamagamedev.itch.io/customunityhierarchy'
                itchioIFrame='https://itch.io/embed/3463919?border_width=5&amp;dark=true'
                features={[
                  {
                    imageLink: 'assets/images/myImages/TreeView.webp',
                    title: 'Tree View:',
                    description: 'Tree branches that are colour customisable.',
                    features: [
                      'Custom settings which are:',
                      'Toggle to enable/disable.',
                      'Colour customisable.',
                    ],
                  },
                  {
                    imageLink:
                      'assets/images/myImages/ComponentIconsCustomUnityHierarchy.webp',
                    title: 'Component Icons:',
                    description:
                      'Component icons displays on the very right what components are attached to a GameObject.',
                    features: [
                      'Main toggle to enable/disable.',
                      'Compact script icons to render once.',
                    ],
                  },
                  {
                    imageLink:
                      'assets/images/myImages/LayersAndTagsCustomUnityHierarchy.webp',
                    title: 'Tags & Layers:',
                    description:
                      'Displays next to the component icons (if enabled) what tags and layers (setting dependant) you have on each GameObject.',
                    features: [
                      'Display visual layers text.',
                      'Display visual tags text.',
                    ],
                  },
                  {
                    imageLink:
                      'assets/images/myImages/HeadersCustomUnityHierarchy.webp',
                    title: 'Headers:',
                    description:
                      'The header feature recently got updated to allow for more prefixes and colours. This gives more customisation potential to the user.',
                    features: [
                      'Header enable main toggle.',
                      'Header colour & Prefix settings.',
                      'List for these settings.',
                    ],
                  },
                ]}
                sourceCodeBoxes={[
                  {
                    boxName: 'SourceCodeHealthManagerSO', // REPLACE
                    boxDescription:
                      "Below is the main code that is required to run the sudoku solver, it uses a multidimensional int array which it iterates through the 0 cells trying to solve them (as they are the ones not imputed by the user).\n This means that by iterating through every cell, and checking if it is a 0, we can determine what the algorithm needs to solve for, next step is to iterate through all possible numbers that can go in that slot and then calling itself to solve the grid. If it cannot solve, the possible number would increase until eventually the grid is solved as we have gone through all if not most possible numbers. However, if all possible numbers have been used and the grid hasn't been solved then it is most likely an impossible grid.",
                    boxTitle: 'StyledHierarchy.cs',
                    boxImg: 'assets/images/csharpIcon.png',
                    boxImgAlt: 'csharp Icon',
                    boxLanguage: 'csharp',
                  },
                ]}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
