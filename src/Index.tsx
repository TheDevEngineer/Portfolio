import './styles/index.css';
import ProjectCard from './ProjectCard';
import MediaSwitcher from './MediaSwitcher';

const projects = [
  {
    imageLink: 'assets/images/myImages/EasyAutoScript.webp',
    imageAlt: 'EasyAutoScript',
    projectTitle: 'Easy Auto Script',
    projectDescription:
      'Easy Auto Script is a macro coding language that takes custom Tokens/Keywords "GetForegroundWindow()", and returns it in a new coding language based on EasyAutoScript.txt. This is a heavily work in progress project and will be getting the ability to send input commands soon.',
    readMoreLink: '/Portfolio/#/easyautoscript',
    tags: [
      'C#',
      'Lexer',
      'Interpreter',
      'Custom Coding Language',
      'Git',
      'VSCode',
      'Personal Project',
    ],
  },
  {
    projectTitle: 'My Portfolio',
    projectDescription:
      "This portfolio is custom coded in HTML, CSS and JavaScript and I'm currently implementing React with TypeScript. I used to host my old portfolio on Wix however, now I am able to use GitHub pages to host the custom HTML/TS/CSS.",
    readMoreLink: '/Portfolio/#/portfolio',
    githubLink: 'https://github.com/TheDevEngineer/Portfolio',
    tags: [
      'HTML',
      'CSS',
      'JS',
      'TS',
      'React',
      'Git',
      'Browser',
      'VSCode',
      'Personal Project',
    ],
  },
  {
    imageLink: 'assets/images/myImages/Cataclysm2.5D.webp',
    imageAlt: 'Cataclysm image',
    videoIFrameLink: '6_uGLtb_7vo',
    projectTitle: 'Cataclysm',
    projectDescription:
      'This was my final group project of University, a 2.5D couch co-op multiplayer game. You the player, must venture round a 3D space ship, solving a mix of 3D and 2D puzzles, to escape from unique monsters which are represented in the 2D realm.',
    readMoreLink: '/Portfolio/#/cataclysm',
    tags: [
      'C#',
      'Unity',
      'Git',
      '2.5D',
      'Multiplayer',
      'Group Project',
      'Visual Studio',
      'University Project',
    ],
  },
  {
    imageLink: 'assets/images/myImages/HeadersStyledHierarchy.webp',
    imageAlt: 'Styled Hierarchy Headers',
    videoLink: 'assets/videos/myVideos/StyledHierarchy.mp4',
    projectTitle: 'Styled Hierarchy',
    projectDescription:
      'Ever get bored of the default Unity look? This project solves that by overlapping the default Hierarchy with a custom one with features such as: tree view, headers, displayed: tags, layers and components.',
    readMoreLink: '/Portfolio/#/styledhierarchy',
    itchioLink: 'https://iamagamedev.itch.io/styledhierarchy',
    githubLink: 'https://github.com/TheDevEngineer/StyledHierarchy',
    tags: [
      'C#',
      'Unity',
      'Git',
      'UI UXML',
      'Visual Studio',
      'Personal Project',
    ],
  },
  {
    imageLink: 'assets/images/myImages/FolderList.webp',
    imageAlt: 'Folder List',
    videoLink: 'assets/videos/myVideos/StyledProjectFolders.mp4',
    projectTitle: 'Styled Project Folders',
    projectDescription:
      'This is an importable custom Unity package (written in C#), that changes the look of the Unity project folders tab. This works by setting a folder path and drawing over the top of it with a sprite of your choice, then you can enable header settings which has a sub setting to enable recursion (settings apply to child folders).',
    readMoreLink: '/Portfolio/#/styledprojectfolders',
    tags: [
      'C#',
      'Unity',
      'Git',
      'UI UXML',
      'Visual Studio',
      'Personal Project',
    ],
  },
  {
    imageLink: 'assets/images/myImages/SodokuSolver.webp',
    imageAlt: 'Sodoku Solver',
    videoLink: 'assets/videos/myVideos/SudokuSolver.mp4',
    projectTitle: 'Suduko Solver',
    projectDescription:
      'When on holiday, I enjoy solving sudoku puzzles. Therefore, I decided to set myself a personal project to complete which was to code this solver which uses a recursive algorithm.',
    readMoreLink: '/Portfolio/#/sudokusolver',
    tags: [
      'C#',
      'Unity',
      'Git',
      '2D',
      'Visual Studio',
      'Tutorial',
      'Personal Project',
    ],
  },
  {
    imageLink: 'assets/images/myImages/Bloom.webp',
    imageAlt: 'Bloom',
    videoIFrameLink: 'UARZzjsFQg8',
    projectTitle: 'Bloom',
    projectDescription:
      'Bloom is a cute cosy flower arrangement game, in which you have to take over your Grandmothers flower shop in order to raise money. It requires you to talk to your customers to understand what occasion they are buying flowers for. Then you have to arrange flowers within a time limit and make a beautiful bouquet.',
    readMoreLink: '/Portfolio/#/bloom',
    tags: [
      'C#',
      'Unity',
      'Git',
      'Group Project',
      'Visual Studio',
      'University Project',
    ],
  },
];
function Index() {
  return (
    <>
      <div className='welcome'>
        <div className='welcome-section'>
          <p className='welcome-section-name'>Bailey</p>
          <p className='welcome-section-title'>Junior Software Engineer</p>
        </div>
        <div className='welcome-video-section'>
          <MediaSwitcher
            imageLink='assets/images/myImages/Cataclysm2.5D.webp'
            imageAlt='Cataclysm2.5D'
            videoIFrameLink='6_uGLtb_7vo'
          />
        </div>
      </div>
      <a id='about-me' className='anchor'></a>
      <hr className='hr-solid' />
      <div>
        <p className='div-title'>About Me</p>
        <p className='about-me'>
          I am a motivated software engineer with a strong foundation in C# and
          object-oriented programming from my background in building interactive
          applications with the Unity Engine. I have a passion for writing
          clean, efficient code and a keen eye for detail, honed by analysing
          system mechanics and identifying bugs. I am now actively expanding my
          skill set into web technologies, including JavaScript (used in this
          portfolio) and React, to build a wider range of software solutions.
        </p>
      </div>
      <a id='projects' className='anchor'></a>
      <hr className='hr-solid' />
      <div className='projects'>
        <p className='div-title'>My Projects</p>
        <div id='projects-section' className='projects-section'>
          {projects.map((item) => (
            <ProjectCard
              key={item.projectTitle}
              imageLink={item.imageLink}
              imageAlt={item.imageAlt}
              videoLink={item.videoLink}
              videoIFrameLink={item.videoIFrameLink}
              projectTitle={item.projectTitle}
              projectDescription={item.projectDescription}
              readMoreLink={item.readMoreLink}
              itchioLink={item.itchioLink}
              githubLink={item.githubLink}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
      <hr className='hr-solid' />
      <div className='technologies'>
        <p className='div-title'>
          My Technologies/Skills
          <small className='div-title-disclaimer'>
            (Logos shown are trademarks of their respective owners and are used
            here only to indicate technologies I have experience with, not as
            endorsements.)
          </small>
        </p>
        <div className='technologies-div'>
          <img src='assets/images/csharpIcon.png' alt='csharpIcon Icon' />
          <img src='assets/images/file-type-html.svg' alt='html Icon' />
          <img src='assets/images/file-type-css.svg' alt='css Icon' />
          <img
            src='assets/images/file-type-js-official.svg'
            alt='javascript Icon'
          />
          <img
            src='assets/images/file-type-typescript-official.svg'
            alt='css Icon'
          />
          <img src='assets/images/Git-Icon-1788C.png' alt='Git Icon' />
          <img src='assets/images/file-type-reactjs.svg' alt='reactjs Icon' />
          <img src='assets/images/trello.svg' alt='trello Icon' />
          <img src='assets/images/slack-icon.svg' alt='trello Icon' />
        </div>
      </div>
      <hr className='hr-solid' />
      <div className='award'>
        <p className='div-title'>My Awards</p>
        <div className='award-div'>
          <img
            className='award-image'
            src='assets/images/myImages/Award.jpeg'
            alt='My Award'
          />
        </div>
      </div>
    </>
  );
}

export default Index;
