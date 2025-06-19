import { useEffect, useRef, useState } from 'react';
import SourceCodeFlexbox from './portfolio/SourceCodeFlexbox';
import SourceCodeConverter from './portfolio/SourceCodeConverter';

interface Props {
  sourceCodes: string[];
  language: string;
}

const componentsMap: { [key: string]: React.ComponentType } = {
  SourceCodeFlexBox: SourceCodeFlexbox,
  SourceCodeConverter: SourceCodeConverter,
};

function SourceCodeBox({ sourceCodes, language }: Props) {
  const [lineCount, setLineCount] = useState(0);

  const codeRef = useRef<HTMLInputElement | null>(null); // Reference to 2nd code block

  useEffect(() => {
    if (!codeRef.current) {
      return;
    }
    const count =
      (codeRef.current.innerHTML.match(new RegExp('<br>', 'g')) || []).length +
      1;
    setLineCount(count);
  });

  return (
    <div>
      <p className='source-code-text'>
        My most used thing in this project is the flexbox which uses html and
        css. Using a flex box how achieved the layout for the box below and many
        other layout designs on these pages.
      </p>
      <div className='source-code-wrapper'>
        <div className='source-code-box'>
          <p className='source-code-numbers'>
            <code>
              {Array.from({ length: lineCount }).map((_, index) => (
                <span key={index}>
                  {index + 1}.<br />
                </span>
              ))}
            </code>
          </p>
          <pre>
            <code className={`language-${language}`} ref={codeRef}>
              {sourceCodes.map((key) => {
                const Component = componentsMap[key];
                if (!Component) return null;
                return <Component key={key} />;
              })}
            </code>
          </pre>
        </div>
        <button className='source-code-box-button'>Copy Code</button>
      </div>
    </div>
  );
}

export default SourceCodeBox;
