import { useEffect, useRef, useState } from 'react';
import SourceCodeFlexbox from './portfolio/SourceCodeFlexbox';
import SourceCodeConverter from './portfolio/SourceCodeConverter';
import SourceCodeEnemy from './portfolio/SourceCodeEnemy';

interface Props {
  box: SourceCodeBoxes;
}

type SourceCodeBoxes = {
  boxName: string;
  boxDescription: string;
  boxTitle: string;
  boxImg: string;
  boxImgAlt: string;
  boxLanguage: string;
};

const componentsMap: { [key: string]: React.ComponentType } = {
  SourceCodeFlexbox: SourceCodeFlexbox,
  SourceCodeConverter: SourceCodeConverter,
  SourceCodeEnemy: SourceCodeEnemy,
};

function SourceCodeBox({ box }: Props) {
  const [lineCount, setLineCount] = useState(0);

  const codeRef = useRef<HTMLElement | null>(null);
  const buttonTextRef = useRef<HTMLElement | null>(null);
  const buttonIconRef = useRef<HTMLElement | null>(null);

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
      <div className='source-code-wrapper'>
        <p className='source-code-text'>{box.boxDescription}</p>
        <div className='source-code-box'>
          <div className='source-code-box-top'>
            <div className='source-code-box-image-and-text'>
              <img src={box.boxImg} alt={box.boxImgAlt} width='24px' />
              <p>{box.boxTitle}</p>
            </div>
            <button
              onClick={() => {
                if (!codeRef.current) {
                  return;
                }
                navigator.clipboard.writeText(codeRef.current.innerText);
                if (!buttonTextRef.current || !buttonIconRef.current) {
                  return;
                }
                buttonTextRef.current.textContent = 'Code Copied';
                buttonIconRef.current.textContent = 'task_alt';
                setTimeout(() => {
                  if (!buttonTextRef.current || !buttonIconRef.current) {
                    return;
                  }
                  buttonTextRef.current.textContent = 'Copy Code';
                  buttonIconRef.current.textContent = 'content_copy';
                }, 1000);
              }}
            >
              <span ref={buttonTextRef}>Copy Code</span>
              <span
                ref={buttonIconRef}
                className='material-symbols-outlined mso-copy'
              >
                content_copy
              </span>
            </button>
          </div>
          <div className='source-code-box-bottom'>
            <p className='source-code-numbers'>
              <code>
                {Array.from({ length: lineCount }).map((_, index) => (
                  <span key={index}>
                    {index + 1}
                    <br />
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
        </div>
      </div>
    </>
  );
}

export default SourceCodeBox;
