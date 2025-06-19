interface Props {
  imageLink: string;
  title: string;
  description: string;
  features: string[];
}

function FeatureCard({ imageLink, title, description, features }: Props) {
  return (
    <div className='feature-box'>
      <div className='feature-sub-box-image'>
        <img className='feature-image' src={imageLink} alt='Tree View' />
      </div>
      <div className='feature-sub-box'>
        <p className='feature-title'>{title}</p>
        <p>{description}</p>
        <p>
          {features.map((item, index) => (
            <span key={index}>
              - {item}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
