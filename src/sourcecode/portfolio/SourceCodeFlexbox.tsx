function SourceCodeFlexBox() {
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
              1.
              <br />
              2.
              <br />
              3.
              <br />
              4.
              <br />
              5.
              <br />
              6.
              <br />
              7.
              <br />
              8.
              <br />
              9.
              <br />
              10. <br />
              11.
            </code>
          </p>
          <pre>
            <code className='language-css'>
              <span className='selector'>.source-code-box </span>
              <span className='brackets'>&#123;</span>
              <br />
              {'  '}
              <span className='blue'>display</span>:{' '}
              <span className='red'>flex</span>;
              <br />
              <span className='brackets'>&#125;</span>
              <br />
              <br />
              <span className='selector'>.source-code-numbers </span>
              <span className='brackets'>&#123;</span>
              <br />
              {'  '}
              <span className='blue'>width</span>:{' '}
              <span className='number'>40px</span>;<br />
              <span className='brackets'>&#125;</span>
              <br />
              <br />
              <span className='selector'>.source-code-box code </span>
              <span className='brackets'>&#123;</span>
              <br />
              {'  '}
              <span className='blue'>flex</span>:{' '}
              <span className='number'>1</span>;<br />
              <span className='brackets'>&#125;</span>
            </code>
          </pre>
        </div>
        <button className='source-code-box-button'>Copy Code</button>
      </div>
    </div>
  );
}

export default SourceCodeFlexBox;
