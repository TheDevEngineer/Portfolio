import { useEffect, useState } from 'react';
import './styles/Header.css';
import ScrollToAnchor from './utils/SmartScrollToAnchor.ts';

interface Props {
  mobileNavOpen: boolean;
  setMobileNavOpen: (newState: boolean) => void;
}

function Header({ mobileNavOpen, setMobileNavOpen }: Props) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleSizeChange = function () {
      setIsDesktop(window.matchMedia('(min-width: 767px)').matches);
    };

    setIsDesktop(window.matchMedia('(min-width: 767px)').matches);

    window.addEventListener('resize', handleSizeChange);

    return () => {
      window.removeEventListener('resize', handleSizeChange);
    };
  }, []);

  return (
    <header className='header' id='header'>
      <div className='header-left'>
        <a
          className='header-link'
          onClick={(event) => ScrollToAnchor(event, 'header', '/Portfolio/')}
          href='/Portfolio/'
          rel='noopener noreferrer nofollow'
        >
          <p className='header-name'>Bailey's Portfolio</p>
        </a>
      </div>
      {isDesktop && (
        <div className='header-right-desktop'>
          <a
            className='header-link'
            href='/Portfolio/#/#projects'
            onClick={(event) =>
              ScrollToAnchor(event, 'projects', '/Portfolio/')
            }
          >
            Projects
          </a>
          <a
            href='https://www.linkedin.com/in/baileykitchen'
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
            href='https://github.com/TheDevEngineer'
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
      )}
      {!isDesktop && (
        <div className='header-right-mobile'>
          <a
            href='https://www.linkedin.com/in/baileykitchen'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <img
              className='logo'
              src='assets/images/LI-In-Bug.png'
              alt='LinkedIn Logo'
            />
          </a>
          <div
            className={
              'header-right-mobile-lines ' + (mobileNavOpen ? 'active' : '')
            }
            onClick={() => {
              setMobileNavOpen(!mobileNavOpen);
            }}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
