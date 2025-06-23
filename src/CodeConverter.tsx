import { useEffect, useRef, useState } from 'react';

const lang: string = `tsx`;
const input: string = `function ReplaceString(
  stringToFind: string,
  stringToReplaceWith: string,
  modified: string
) {
  const finds: number[] = [];
  for (let i = 0; i < modified.length; i++) {
    if (modified[i] === stringToFind) {
      finds.push(i);
    }
  }

  for (let j = finds.length - 1; j >= 0; j--) {
    const i = finds[j];
    modified =
      modified.substring(0, i) +
      stringToReplaceWith +
      modified.substring(i + 1);
  }
  return modified;
}`;

function CodeConverter() {
  const [output, setOutput] = useState(input);
  const hasRun = useRef<boolean>(false);
  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    let modified = input;

    if (lang === 'css') {
      modified = ReplaceString('.', "<span className='selector'>.", modified);
      modified = ReplaceString(
        '{',
        "</span><span className='brackets'>&#123;</span><br /><span className='blue'>",
        modified
      );
      modified = ReplaceString(':', ':</span>', modified);
      // Determine if the next thing is a number or a letter

      const finds: number[] = [];
      for (let i = 0; i < modified.length; i++) {
        if (modified[i] === ':') {
          finds.push(i + 9);
        }
      }

      for (let j = finds.length - 1; j >= 0; j--) {
        let i = finds[j];
        // Skip whitespace after colon
        while (i < modified.length && /\s/.test(modified[i])) {
          i++;
        }
        const x: string = modified[i];
        const y: number = modified.indexOf(';', i);

        console.log(x);
        console.log(`int: ${y}`);
        console.log(y - i);

        if (/[0-9]/.test(x)) {
          // For numbers, wrap in a span if you want
          modified =
            modified.substring(0, i) +
            "<span className='number'>" +
            modified.substring(i, y) +
            '</span>' +
            modified[y] +
            '<br />' +
            modified.substring(y + 1);
        } else if (/[a-zA-Z]/.test(x)) {
          // For letters, wrap in a span
          modified =
            modified.substring(0, i) +
            "<span className='red'>" +
            modified.substring(i, y) +
            '</span>' +
            modified[y] +
            '<br />' +
            modified.substring(y + 1);
        }
        // else: do nothing for 'Other'
      }

      modified = ReplaceString(
        '}',
        "<span className='brackets'>&#125;</span><br /><br />",
        modified
      );

      modified = modified.substring(0, modified.length - 12);
    } else if (lang === 'csharp') {
    }

    setOutput(modified);
  }, []);

  return (
    <pre>
      <code>{output}</code>
    </pre>
  );
}

function ReplaceString(
  stringToFind: string,
  stringToReplaceWith: string,
  modified: string
) {
  const finds: number[] = [];
  for (let i = 0; i < modified.length; i++) {
    if (modified[i] === stringToFind) {
      finds.push(i);
    }
  }

  for (let j = finds.length - 1; j >= 0; j--) {
    const i = finds[j];
    modified =
      modified.substring(0, i) +
      stringToReplaceWith +
      modified.substring(i + 1);
  }
  return modified;
}

export default CodeConverter;
