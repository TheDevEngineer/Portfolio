function SourceCodeFlexbox() {
  return (
    <>
      <span className='selector'>.source-code-box </span>
      <span className='brackets'>&#123;</span>
      <br />
      {'  '}
      <span className='blue'>display</span>: <span className='red'>flex</span>;
      <br />
      <span className='brackets'>&#125;</span>
      <br />
      <br />
      <span className='selector'>.source-code-numbers </span>
      <span className='brackets'>&#123;</span>
      <br />
      {'  '}
      <span className='blue'>width</span>: <span className='number'>40px</span>;
      <br />
      <span className='brackets'>&#125;</span>
      <br />
      <br />
      <span className='selector'>.source-code-box code </span>
      <span className='brackets'>&#123;</span>
      <br />
      {'  '}
      <span className='blue'>flex</span>: <span className='number'>1</span>;
      <br />
      <span className='brackets'>&#125;</span>
    </>
  );
}

export default SourceCodeFlexbox;
