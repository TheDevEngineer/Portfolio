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
            path='/easyautoscript'
            element={
              <Page
                title='Easy Auto Script'
                description='Easy Auto Script is a macro language that allows custom user inputs, it tokenizes these inputs, parsers the functions, then interprets them to generate a desired output which will either by moving the mouse, sending keyboard or mouse instructions or general windows functions.'
                imageLink='assets/images/myImages/EasyAutoScript.webp'
                context="This is a personal project I created as I didn't want to rely on third-party software. Instead, I built my own program and interpreter, which supports keyboard and mouse inputs, along with setting foreground windows and other various windows functions using the user32.dll."
                sourcePrivate={true}
                features={[
                  {
                    imageLink: 'assets/images/myImages/EasyAutoScript.webp',
                    title: 'Custom Coding Language:',
                    description:
                      'Takes in a custom coding language that determines what Tokens are present:',
                    features: [
                      'IStatement: "Write(123) = WriteStatement',
                      'IExpression: "123" = NumberLiteralExpression.',
                    ],
                  },
                  {
                    imageLink:
                      'assets/images/myImages/EasyAutoScriptHandler.webp',
                    title: 'Custom Handlers:',
                    description:
                      'WriteStatementHandler handles the keyword "Write" in which it can take in a list/var/value.',
                    features: [
                      '[In] list/var/value,',
                      '[Out] Outputs to the console the list/var/value that was passed in.',
                    ],
                  },
                ]}
                sourceCodeBoxes={[
                  {
                    boxName: 'SourceCodeToken',
                    boxDescription: `This token.cs file stores a Token such as "String "Hello" Hello 1" and here is how it breaks down in this file:
                      
                    TokenType (String),
                    Lexeme (The text that was found which in the example I am going to use is "Hello"), 
                    A Literal, which is the actual value: Hello, 
                    Finally, the Token stores a line number for any parse errors to make it easier to the user to debug once pointed to where the error occured.`,
                    boxTitle: 'Token.cs',
                    boxImg: 'assets/images/csharpIcon.png',
                    boxImgAlt: 'csharp Icon',
                    boxLanguage: 'csharp',
                  },
                ]}
              />
            }
          />
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
                videoIFrameLink='6_uGLtb_7vo'
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
                itchioLink='https://iamagamedev.itch.io/styledhierarchy'
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
                      'assets/images/myImages/ComponentIconsStyledHierarchy.webp',
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
                      'assets/images/myImages/LayersAndTagsStyledHierarchy.webp',
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
                      'assets/images/myImages/HeadersStyledHierarchy.webp',
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
                    boxName: 'SourceCodeStyledHierarchyStepOne',
                    boxDescription:
                      'Below will be a step by step guide on how to create the basic StyledHierarchy script to draw textures for each of the components. First we have to create a new C# script that will be called StyledHierarchy this will need to be placed inside of Unity in a Editor/StyledHierarchy.cs folder so that it runs during editor and not runtime.',
                    boxTitle: 'StyledHierarchy.cs',
                    boxImg: 'assets/images/csharpIcon.png',
                    boxImgAlt: 'csharp Icon',
                    boxLanguage: 'csharp',
                  },
                  {
                    boxName: 'SourceCodeStyledHierarchyStepTwo',
                    boxDescription:
                      'After this we need to tell Unity that every time the Editor refreshes/loads, we want an event to be called. To do this, inside of the class, we use a static method named as your [FileName]. Inside this method, we need to listen to the event "EditorApplication.hierarchyWindowItemOnGUI += Draw;". Now we have our api call setup, we can press shift + enter on the "Draw" method and generate it from scratch.',
                    boxTitle: 'StyledHierarchy.cs',
                    boxImg: 'assets/images/csharpIcon.png',
                    boxImgAlt: 'csharp Icon',
                    boxLanguage: 'csharp',
                  },
                  {
                    boxName: 'SourceCodeStyledHierarchyStepThree',
                    boxDescription: `Inside this draw method, we should first check and return if the object we have got from the "instanceID" is null. This usually occurs when it draws the scene name.

Next we can convert the instanceID to a Object by using: "Object objectReference = EditorUtility.InstanceIDToObject(instanceID);" Then converting it into a GameObject with: "GameObject gameObject = objectReference as GameObject;". Now we have the GameObject we are drawing we just need a list of its components, we can get this by using: "Component[] objectComponents = gameObject.GetComponents<Component>();"

Now lets store an integer called "offset" and by default set it to 0 (this will come in use later).

The final steps are to setup the foor loop for all objectComponents we collected, we need to collect the icon Unity currently uses (see code block below) for full line of code. Once we have the GUIContent Unity uses, which stores the image and text but we just need the image in this case. we can store this as a Texture2D. Finally using "GUI.DrawTexture(newRect, componentTexture);" to make the component icons come to life (adding a offset (20pixels) after every icon)`,
                    boxTitle: 'StyledHierarchy.cs',
                    boxImg: 'assets/images/csharpIcon.png',
                    boxImgAlt: 'csharp Icon',
                    boxLanguage: 'csharp',
                  },
                ]}
              />
            }
          />
          <Route
            path='/styledprojectfolders'
            element={
              <Page
                title='StyledProjectFolders'
                description='This project was an educational and personal project I completed after coding my StyledHierarchy project. I created this as I disliked how Unity originally looks. This is now a package that I import into all my Unity projects, to help visualise where prefabs/assets are stored.'
                videoLink='assets/videos/myVideos/StyledProjectFolders.mp4'
                context='This is a follow up package after completing StyledHierarchy that changes the look of the project folders window (see image above). I really like the customisation settings on this project, it takes in a folder path that the user wants to customise, and then it displays different settings along with textures for if the folder is empty, or contains data (more features below).'
                sourcePrivate={true}
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
                      'assets/images/myImages/AlternatingBackground.webp',
                    title: 'Alternating Background:',
                    description:
                      'Alternating background alternates a background colour behind the folder mainly for aesthetic looks.',
                    features: [
                      'Custom settings which are:',
                      'Main toggle to enable/disable.',
                      'First colour to alternate with.',
                      'Second colour to alternate with.',
                    ],
                  },
                  {
                    imageLink: 'assets/images/myImages/FolderList.webp',
                    title: 'Custom Folders:',
                    description:
                      'My favourite section, this overrides the default folder look with new Texture(s) for if it contains data or if it is empty.',
                    features: [
                      'Custom settings which are:',
                      'Override the default unity folder texture and showcase when a folder is empty.',
                      'Create a list of folders with sub settings: Folder path to edit, New folder icon, Empty folder icon, Header status, Header colour, Recursive (effects children).',
                    ],
                  },
                ]}
                sourceCodeBoxes={[
                  {
                    boxName: 'SourceCodeStyledProjectFolders',
                    boxDescription: `Below is the bare bones for drawing a folder over the top of another folder.

I have added comments for what each major line does, it utilises Unity methods such as "GUI.DrawTexture" at a "Rect" with the "Texture" folder in this case.

When Unity "re-draws" the Project Window, a API is called which we can subscribe to by doing "EditorApplication.projectWindowItemOnGUI += Draw;". This allows us to find what item is being drawn, as it gives us a guid (unique identifier) along with a "Rect" of what item is being drawn.

The secret behind these projects is that the images are just being drawn over the top of the previous ones. Due to how Unity works, there is no current way to override the folder icon without drawing over the previous one, this is the same case with the Hierarchy.

Therefore getting creative with drawing it above as if the one drawn by Unity didn't exist can achieve a good but not perfect result. This is because it still uses resources in the first place to draw the first texture then to re-draw ours.`,
                    boxTitle: 'StyledProjectFolders.cs',
                    boxImg: 'assets/images/csharpIcon.png',
                    boxImgAlt: 'csharp Icon',
                    boxLanguage: 'csharp',
                  },
                ]}
              />
            }
          />
          <Route
            path='/sudokusolver'
            element={
              <Page
                title='Sodoku Solver'
                description='When on holiday, I enjoy solving sudoku puzzles. Therefore, I decided to set myself a personal project to complete which was this sudoku solver which uses a recursive algrothim.'
                videoLink='assets/videos/myVideos/SudokuSolver.mp4'
                context={`This C# sudoku solver was an educational project that I have created in my own time, it uses a recursive algorithm to solve the boards. To achieve this solver I followed this YouTube tutorial: (Create Sudoku Solver with Python in 20 minutes, 5 Jan. 2021).

What is a recursive backtracking algorithm and how do I use it?

By iterating through a list of possible numbers for each cell, then trying to solve the remaining grid from that point forwards. If it fails, it backtracks to the previous cell in which it iterates that cell number until either a solution is found, or it determines it's an impossible grid.`}
                itchioLink='https://iamagamedev.itch.io/sudokusolver'
                itchioIFrame='https://itch.io/embed/3460250?border_width=5&amp;dark=true'
                itchioEmbed='https://itch.io/embed-upload/13377082?color=333333'
                itchioEmbedALink='https://iamagamedev.itch.io/sudokusolver'
                sourceCodeBoxes={[
                  {
                    boxName: 'SourceCodeSudokuSolverStepOne',
                    boxDescription: `Below is how I use 2 dimensional arrays in Unity C# to create a grid.

This 2 dimensional array allows me to pass through a y and x position to get a value: "int cell = grid[y, x]" with the number starting at 0 as it is an array. Therefore, to get the top left slot and set it to 0 I would call "grid[0, 0] = 0"`,
                    boxTitle: 'SodokuSolver.cs',
                    boxImg: 'assets/images/csharpIcon.png',
                    boxImgAlt: 'csharp Icon',
                    boxLanguage: 'csharp',
                  },
                  {
                    boxName: 'SourceCodeSudokuSolverStepTwo',
                    boxDescription: `This solve function/method does exactly what the name states, solves for each empty cell. To do this it iterates through each y cell and each x cell to check if it is one it needs to solve for which is indicated by a 0.

It then iterates through a list of numbers which is stored as a guess, and calls a function (which will be explained later) called "Possible". If the function returns true, we can store the number in the grid and continue solving until a solution is found. If this doesn't happen, set it to 0 and backtrack increasing the "guess" by 1 for each iteration until another backtrack is potentially needed.`,
                    boxTitle: 'SodokuSolver.cs',
                    boxImg: 'assets/images/csharpIcon.png',
                    boxImgAlt: 'csharp Icon',
                    boxLanguage: 'csharp',
                  },
                  {
                    boxName: 'SourceCodeSudokuSolverStepThree',
                    boxDescription: `This solve function/method does exactly what the name states, solves for each empty cell. To do this it iterates through each y cell and each x cell to check if it is one it needs to solve for which is indicated by a 0.

It then iterates through a list of numbers which is stored as a guess, and calls a function (which will be explained later) called "Possible". If the function returns true, we can store the number in the grid and continue solving until a solution is found. If this doesn't happen, set it to 0 and backtrack increasing the "guess" by 1 for each iteration until another backtrack is potentially needed.`,
                    boxTitle: 'SodokuSolver.cs',
                    boxImg: 'assets/images/csharpIcon.png',
                    boxImgAlt: 'csharp Icon',
                    boxLanguage: 'csharp',
                  },
                ]}
              />
            }
          />
          <Route
            path='/bloom'
            element={
              <Page
                title='Bloom'
                description='Bloom is a cute cosy flower arrangement game in which you have to take over your Grandmothers flower shop in order to raise money. It requires you to talk to your customers to understand what occasion they are buying flowers for such as an anniversary, then make a connection within a time limit for example any flowers that are the colour red and arrange a beautiful bouquet.'
                videoIFrameLink='UARZzjsFQg8'
                context={`This Project was my Second Year University group project where I was the lead-programmer and animation designer. To achieve this I coded the flower arrangement side of the game along with the scoring system, timer and main menu. I designed animations for wrapping the bouquet, is done with a plugin/package called DoTween, which allows for scripting animations within Unity.`}
                itchioLink='https://dont-ask-productions.itch.io/bloom'
                itchioIFrame='https://itch.io/embed/2711547?border_width=5&amp;dark=true'
                itchioEmbed='https://itch.io/embed-upload/10435569?color=333333'
                itchioEmbedALink='https://dont-ask-productions.itch.io/bloom'
                sourceCodeBoxes={[
                  {
                    boxName: 'SourceCodeBloom',
                    boxDescription: `The flower arrangement is handled with mouse calls you can see a list below:

By checking when a mouse enters, exits, is pressed (down) and released (up) you can then script all of the code within these methods.

An example of this is using the "OnMouseEnter" method to display the flower data based on what image (flower) the mouse has hovered over, then as it leaves "OnMouseExit" we can hide the information box.

The "OnMouseDown" method is used to pickup a flower (causing it to follow the cursor position by setting a boolean to true) then we can disable the boolean within "OnMouseUp" call handling if it is in an arrangement spot or if it needs to be returned back to the flower bucket.`,
                    boxTitle: 'MouseHandlers.cs',
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
