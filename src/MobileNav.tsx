import './styles/header.css';

interface Props {
  mobileNavOpen: boolean;
  setMobileNavOpen: (newState: boolean) => void;
}

function MobileNav({ mobileNavOpen, setMobileNavOpen }: Props) {
  return (
    <div
      id='mobileNav'
      className='overlay'
      style={{ height: mobileNavOpen ? '100%' : '0%' }}
    >
      <div className='overlay-content'>
        <a href='#projects' onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          Projects
        </a>
        <a href='#' onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          CV/R&#201;SUM&#201;
        </a>
        <a
          href='https://iamagamedev.itch.io/'
          target='_blank'
          rel='noopener noreferrer'
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
          rel='noopener noreferrer'
        >
          <img
            className='logo'
            src='assets/images/github-mark.svg'
            alt='GitHub Mark'
          />
        </a>
      </div>
    </div>
  );
}

export default MobileNav;
