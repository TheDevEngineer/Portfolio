import MediaSwitcher from './MediaSwitcher';

interface Props {
  imageLink?: string;
  imageAlt?: string;
  videoLink?: string;
  projectTitle: string;
  projectDescription: string;
  readMoreLink: string;
  itchioLink?: string;
  githubLink?: string;
  tags: string[];
}

function ProjectCard({
  imageLink,
  imageAlt,
  videoLink,
  projectTitle,
  projectDescription,
  readMoreLink,
  itchioLink,
  githubLink,
  tags,
}: Props) {
  return (
    <div className='project-div'>
      {!imageLink && !imageAlt && !videoLink && (
        <div className='portfolio-div'>
          <img src='assets/images/file-type-html.svg' alt='html icon' />
          <img src='assets/images/file-type-css.svg' alt='css icon' />
          <img
            src='assets/images/file-type-js-official.svg'
            alt='javascript icon'
          />
          <img
            src='assets/images/file-type-typescript-official.svg'
            alt='typescript icon'
          />
          <img src='assets/images/Git-Icon-1788C.png' alt='git icon' />
          <img src='assets/images/file-type-reactjs.svg' alt='react icon' />
        </div>
      )}
      {imageLink && imageAlt && videoLink && (
        <MediaSwitcher
          imageLink={imageLink}
          imageAlt={imageAlt}
          videoLink={videoLink}
        />
      )}
      <div className='description-container'>
        <p className='project-title'>{projectTitle}</p>
        <p className='project-description'>{projectDescription}</p>
        <div className='buttons-div'>
          <a className='link-buttons' href={readMoreLink}>
            <span className='material-symbols-outlined link-image'>
              read_more
            </span>
            <span className='link-title'>Read More</span>
          </a>
          {itchioLink && (
            <a
              className='link-buttons'
              href={itchioLink}
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <img
                className='link-image'
                src='assets/images/itchio-logo-textless-black.svg'
                alt='itch.io Logo'
              />
              <span className='link-title'>itch.io</span>
            </a>
          )}
          {githubLink && (
            <a
              className='link-buttons'
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <img
                className='link-image'
                src='assets/images/github-mark.svg'
                alt='GitHub Mark'
              />
              <span className='link-title'>GitHub</span>
            </a>
          )}
        </div>
        <div className='tags-div'>
          {tags.map((item) => (
            <p key={item} className='tag'>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
