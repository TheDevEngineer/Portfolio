import './styles/Footer.css';
import ScrollToAnchor from './utils/SmartScrollToAnchor';

function Footer() {
  return (
    <footer className='footer'>
      <div>
        <p>
          <a
            href='#about-me'
            onClick={(event) =>
              ScrollToAnchor(event, 'about-me', '/Portfolio/')
            }
          >
            About
          </a>{' '}
          &{' '}
          <a
            href='https://www.linkedin.com/in/bailey-kitchen-600657363/'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            Contact
          </a>
        </p>
      </div>
      <div>
        <p>
          <a
            href='https://www.linkedin.com/in/bailey-kitchen-600657363/'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            href='https://iamagamedev.itch.io/'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            itch.io
          </a>
          ,{' '}
          <a
            href='https://github.com/IAmAGameDev'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
