import SourceCodeBox from './sourcecode/SourceCodeBox';
import FeatureCard from './FeatureCard';
import './styles/pages.css';
import LazyYoutube from './LazyYoutube';

interface Props {
  title: string;
  description: string;
  imageLink?: string;
  imageLinkAlt?: string;
  videoIFrameLink?: string;
  videoLink?: string;
  images?: ImagesAndAlt[];
  context: string;
  sourcePrivate?: boolean;
  githubLink?: string;
  itchioLink?: string;
  itchioIFrame?: string;
  itchioEmbed?: string;
  itchioEmbedALink?: string;
  features?: FeatureType[];
  sourceCodeBoxes: SourceCodeBoxes[];
}

type ImagesAndAlt = {
  imageLink: string;
  alt: string;
};

type FeatureType = {
  imageLink: string;
  title: string;
  description: string;
  features: string[];
};

type SourceCodeBoxes = {
  boxName: string;
  boxDescription: string;
  boxTitle: string;
  boxImg: string;
  boxImgAlt: string;
  boxLanguage: string;
};

function Page({
  title,
  description,
  imageLink,
  imageLinkAlt,
  videoIFrameLink,
  videoLink,
  images,
  context,
  sourcePrivate,
  githubLink,
  itchioLink,
  itchioIFrame,
  itchioEmbed,
  itchioEmbedALink,
  features,
  sourceCodeBoxes,
}: Props) {
  return (
    <>
      <div className='page-welcome-section'>
        <p className='section-title'>{title}</p>
        <p className='section-description'>{description}</p>
        {videoLink && (
          <video
            className='welcome-video'
            autoPlay
            controls
            loop
            muted
            src={videoLink}
            width='420'
          ></video>
        )}
        {imageLink && (
          <img
            className='welcome-image-big'
            src={imageLink}
            alt={imageLinkAlt}
            width='420'
            height='auto'
          />
        )}
        {images && (
          <div className='images'>
            {images.map((key, index) => {
              return (
                <img
                  key={index}
                  className='welcome-image'
                  src={key.imageLink}
                  alt={key.alt}
                />
              );
            })}
          </div>
        )}

        {videoIFrameLink && (
          <div className='video-container'>
            <LazyYoutube videoIFrameLink={videoIFrameLink} />
          </div>
        )}
      </div>
      <hr className='hr-solid' />
      <div className='context-and-description'>
        <p className='section-title'>Context:</p>
        <p className='context-description'>{context}</p>
      </div>
      {(githubLink || itchioLink || sourcePrivate) && (
        <>
          <hr className='hr-solid' />
          <div className='download-and-source'>
            <p className='section-title'>
              {itchioLink && 'Play'}
              {itchioLink && githubLink && ' & '}
              {(githubLink || sourcePrivate) && 'Source Code'}:
            </p>
            {sourcePrivate && (
              <p className='source-private'>
                The source code for this project is currently private. To see a
                few sneak peaks look below at the source code explained section.
              </p>
            )}
            {!sourcePrivate && (
              <div className='itchio-and-github'>
                {itchioIFrame && (
                  <iframe
                    title='Download on itch.io'
                    className='iframe desktop-layout'
                    src={itchioIFrame}
                    width='560'
                    height='175'
                    loading='lazy'
                  ></iframe>
                )}
                {itchioLink && (
                  <a
                    href={itchioLink}
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                    aria-label='Visit the project on itch.io'
                  >
                    <img
                      className='iframe mobile-layout'
                      width='175'
                      height='175'
                      src='assets/images/itchio-logo-textless-black.svg'
                      alt='itchio Logo'
                    />
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                    aria-label='View the source files on GitHub'
                  >
                    <img
                      className='iframe'
                      width='175'
                      height='175'
                      src='assets/images/github-mark.svg'
                      alt='GitHub Mark'
                    />
                  </a>
                )}
              </div>
            )}
            {itchioEmbed && itchioEmbedALink && (
              <div className='itchio-embed-margin'>
                <div
                  className={`itchio-embed-div ${
                    itchioEmbedALink.includes('bloom')
                      ? 'aspect-16-9'
                      : 'aspect-3-5'
                  }`}
                >
                  <iframe className='itchio-embed' src={itchioEmbed}>
                    <a
                      href={itchioEmbedALink}
                      target='_blank'
                      rel='noopener noreferrer nofollow'
                    >
                      Play {title} on itch.io
                    </a>
                  </iframe>
                </div>
              </div>
            )}
          </div>
        </>
      )}
      {features && features.length > 0 && (
        <>
          <hr className='hr-solid' />
          <div className='features'>
            <p className='section-title'>Features:</p>
            <div className='features-section'>
              {features.map((key, index) => {
                return (
                  <FeatureCard
                    key={index}
                    imageLink={key.imageLink}
                    title={key.title}
                    description={key.description}
                    features={key.features}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
      <hr className='hr-solid' />
      <div className='source-code-explained'>
        <p className='section-title'>Source Code Explained:</p>
        {sourceCodeBoxes.map((key, index) => (
          <SourceCodeBox key={index} box={key} />
        ))}
      </div>
    </>
  );
}

export default Page;
