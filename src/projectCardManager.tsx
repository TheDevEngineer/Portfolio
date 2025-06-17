import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import ProjectCard from './ProjectCard.tsx';

const projects = [
  {
    videoPath: 'assets/videos/myVideos/Bloom.mp4',
    projectTitle: 'My Portfolio',
    projectDescription:
      "This portfolio is custom coded in HTML, CSS and JavaScript and I'm currently implementing React with TypeScript. I use to host my old portfolio on Wix however, now I am able to use GitHub pages to host the custom HTML.",
    readMoreLink: 'portfolio.html',
    tags: [
      'HTML',
      'CSS',
      'JS',
      'TS',
      'Git',
      'Browser',
      'VSCode',
      'Personal Project',
    ],
  },
  {
    videoPath: 'assets/videos/myVideos/Bloom.mp4',
    projectTitle: 'Cataclysm',
    projectDescription:
      'This was my final group project of Univiersity, a 2.5D couch co-op multiplayer game. You the player must venture round a 3D space ship solving a mix of 3D and 2D puzzles to each from unique monsters which are represented in the 2D realm.',
    readMoreLink: 'portfolio.html',
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
    videoPath: 'assets/videos/myVideos/StyledHierarchy.mp4',
    projectTitle: 'Styled Hierarchy',
    projectDescription:
      'Ever get bored of the default Unity look? This project solves that by overlapping the default Hierarchy with a custom one with features such as: tree view, headers, displayed: tags, layers and components.',
    readMoreLink: '#',
    itchioLink: 'https://iamagamedev.itch.io/styledhierarchy',
    githubLink: 'https://github.com/IAmAGameDev/StyledHierarchy',
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
    videoPath: 'assets/videos/myVideos/StyledProjectFolders.mp4',
    projectTitle: 'Styled Project Folders',
    projectDescription:
      'This is a importable custom Unity package (written in c#), that changes the look of the Unity project folders tab. This works by setting a folder and drawing over the top of it with a sprite of your choice, then you can enable header settings along with if it is recursive (applies to children).',
    readMoreLink: '#',
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
    videoPath: 'assets/videos/myVideos/SudokuSolver.mp4',
    projectTitle: 'Suduko Solver',
    projectDescription:
      'When on holiday, I enjoy solving sudoku puzzles. Therefore, I decided to set myself a personal project to complete which was to code this solver which uses a recursive algrothim.',
    readMoreLink: '#',
    tags: [
      'C#',
      'Unity',
      '2D',
      'Visual Studio',
      'Tutorial',
      'Personal Project',
    ],
  },
  {
    videoPath: 'assets/videos/myVideos/Bloom.mp4',
    projectTitle: 'Bloom',
    projectDescription:
      'Bloom is a cute cosy flower arrangement game in which you have to take over your Grandmothers flower shop in order to raise money. It requires you to talk to your customers to understand what occasion they are buying flowers for. Then you have to arrange flowers within a time limit and make a beautiful bouquet.',
    readMoreLink: '#',
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
createRoot(document.getElementById('projects-section')!).render(
  <StrictMode>
    {projects.map((item) => (
      <ProjectCard
        key={item.projectTitle}
        videoPath={item.videoPath}
        projectTitle={item.projectTitle}
        projectDescription={item.projectDescription}
        readMoreLink={item.readMoreLink}
        itchioLink={item.itchioLink}
        githubLink={item.githubLink}
        tags={item.tags}
      />
    ))}
  </StrictMode>
);
