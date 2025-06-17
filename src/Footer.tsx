const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <p>
          <a className='footer-link' href='#about-me'>
            About
          </a>{' '}
          &{' '}
          <a
            className='footer-link'
            href='https://www.linkedin.com/in/bailey-kitchen-600657363/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact
          </a>
        </p>
      </div>
      <div className='footer-right'>
        <p>
          <a
            className='footer-link'
            href='https://www.linkedin.com/in/bailey-kitchen-600657363/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            className='footer-link'
            href='https://iamagamedev.itch.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            itch.io
          </a>
          ,{' '}
          <a
            className='footer-link'
            href='https://github.com/IAmAGameDev'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
