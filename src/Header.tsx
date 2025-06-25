import './styles/Header.css';
import ScrollToAnchor from './utils/SmartScrollToAnchor.ts';

interface Props {
  mobileNavOpen: boolean;
  setMobileNavOpen: (newState: boolean) => void;
}

function Header({ mobileNavOpen, setMobileNavOpen }: Props) {
  return (
    <header className='header'>
      <div className='header-left'>
        <a
          className='header-link'
          href='/Portfolio/'
          rel='noopener noreferrer nofollow'
        >
          <p className='header-name'>Bailey's Portfolio</p>
        </a>
      </div>
      <div className='header-right-desktop'>
        <a
          className='header-link'
          href='/Portfolio/#/#projects'
          onClick={(event) => ScrollToAnchor(event, 'projects', '/Portfolio/')}
        >
          Projects
        </a>
        <a className='header-link' href='/Portfolio/'>
          CV/R&#201;SUM&#201;
        </a>
        <a
          href='https://www.linkedin.com/in/bailey-kitchen-600657363/'
          target='_blank'
          rel='noopener noreferrer nofollow'
        >
          <img
            className='logo'
            src='assets/images/LI-In-Bug.png'
            alt='LinkedIn Logo'
          />
        </a>
        <a
          href='https://iamagamedev.itch.io/'
          target='_blank'
          rel='noopener noreferrer nofollow'
        >
          <img
            className='logo'
            src='assets/images/itchio-logo-textless-black.svg'
            alt='itch.io Logo'
          />
        </a>
        <a
          href='https://github.com/IAmAGameDev'
          target='_blank'
          rel='noopener noreferrer nofollow'
        >
          <img
            className='logo'
            src='assets/images/github-mark.svg'
            alt='GitHub Mark'
          />
        </a>
      </div>
      <div className='header-right-mobile'>
        <a
          href='https://www.linkedin.com/in/bailey-kitchen-600657363/'
          target='_blank'
          rel='noopener noreferrer nofollow'
        >
          <img
            className='logo'
            src='assets/images/LI-In-Bug.png'
            alt='LinkedIn Logo'
          />
        </a>
        <span
          className='material-symbols-outlined menu'
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          menu
        </span>
      </div>
    </header>
  );
}

export default Header;
