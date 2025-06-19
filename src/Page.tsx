import SourceCodeFlexBox from './sourcecode/portfolio/SourceCodeFlexbox';
import FeatureCard from './FeatureCard';
import './styles/pages.css';

const componentsMap: { [key: string]: React.ComponentType } = {
  SourceCodeFlexBox: SourceCodeFlexBox,
  B: SourceCodeFlexBox,
};

interface Props {
  title: string;
  description: string;
  context: string;
  githubLink?: string;
  itchioLink?: string;
  itchioIFrame?: string;
  features?: FeatureType[];
  sourceCodes: string[];
}

type FeatureType = {
  imageLink: string;
  title: string;
  description: string;
  features: string[];
};

function Page({
  title,
  description,
  context,
  githubLink,
  itchioLink,
  itchioIFrame,
  features,
  sourceCodes,
}: Props) {
  return (
    <>
      <div className='page-welcome-section'>
        <p className='section-title'>{title}</p>
        <p className='section-description'>{description}</p>
        <div className='images'>
          <img
            className='welcome-image'
            src='assets/images/file-type-html.svg'
            alt='html Icon'
          />
          <img
            className='welcome-image'
            src='assets/images/file-type-typescript-official.svg'
            alt='css Icon'
          />
          <img
            className='welcome-image'
            src='assets/images/file-type-js-official.svg'
            alt='javascript Icon'
          />
          <img
            className='welcome-image'
            src='assets/images/file-type-typescript-official.svg'
            alt='css Icon'
          />
          <img
            className='welcome-image'
            src='assets/images/Git-Icon-1788C.png'
            alt='Git Icon'
          />
          <img
            className='welcome-image'
            src='assets/images/file-type-reactjs.svg'
            alt='reactjs Icon'
          />
        </div>
      </div>
      <hr className='hr-solid' />
      <div className='context-and-description'>
        <p className='section-title'>Context:</p>
        <p className='context-description'>{context}</p>
      </div>
      {(githubLink || itchioLink) && (
        <>
          <hr className='hr-solid' />
          <div className='download-and-source'>
            <p className='section-title'>
              {itchioLink && 'Play'}
              {itchioLink && githubLink && ' & '}
              {githubLink && 'Source Code'}:
            </p>
            <div className='itchio-and-github'>
              {itchioIFrame && (
                <iframe
                  className='iframe desktop-layout'
                  src={itchioIFrame}
                  width='560'
                  height='175'
                >
                  <a
                    href='https://iamagamedev.itch.io/customunityhierarchy'
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                  >
                    CustomUnityHierarchy by IAmAGameDev
                  </a>
                </iframe>
              )}
              {itchioLink && (
                <a
                  href={itchioLink}
                  target='_blank'
                  rel='noopener noreferrer nofollow'
                >
                  <img
                    className='iframe mobile-layout'
                    width='175'
                    height='175'
                    src='assets/images/itchio-logo-textless-black.svg'
                    alt='GitHub Mark'
                  />
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target='_blank'
                  rel='noopener noreferrer nofollow'
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
          </div>
        </>
      )}
      <hr className='hr-solid' />
      {features && features.length > 0 && (
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
      )}
      <hr className='hr-solid' />
      <div className='source-code-explained'>
        <p className='section-title'>Source Code Explained:</p>
        {sourceCodes.map((key) => {
          const Component = componentsMap[key];
          if (!Component) return null;
          return <Component key={key} />;
        })}
      </div>
    </>
  );
}

export default Page;
