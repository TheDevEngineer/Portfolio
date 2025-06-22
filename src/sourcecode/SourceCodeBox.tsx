import { useEffect, useRef, useState } from 'react';
import SourceCodeFlexbox from './portfolio/SourceCodeFlexbox';
import SourceCodeConverter from './portfolio/SourceCodeConverter';

interface Props {
  box: SourceCodeBoxes;
}

type SourceCodeBoxes = {
  boxName: string;
  boxDescription: string;
  boxLanguage: string;
};

const componentsMap: { [key: string]: React.ComponentType } = {
  SourceCodeFlexbox: SourceCodeFlexbox,
  SourceCodeConverter: SourceCodeConverter,
};

function SourceCodeBox({ box }: Props) {
  const [lineCount, setLineCount] = useState(0);

  const codeRef = useRef<HTMLElement | null>(null);

  const Component = componentsMap[box.boxName];

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
    <>
      <div>
        <p className='source-code-text'>{box.boxDescription}</p>
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
              <code className={`language-${box.boxLanguage}`} ref={codeRef}>
                <Component />
              </code>
            </pre>
          </div>
          <button className='source-code-box-button'>Copy Code</button>
        </div>
      </div>
    </>
  );
}

export default SourceCodeBox;
