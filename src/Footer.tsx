import './styles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div>
        <p>
          <a href='#about-me'>About</a> &{' '}
          <a
            href='https://www.linkedin.com/in/bailey-kitchen-600657363/'
            target='_blank'
            rel='noopener noreferrer'
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
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            href='https://iamagamedev.itch.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            itch.io
          </a>
          ,{' '}
          <a
            href='https://github.com/IAmAGameDev'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
