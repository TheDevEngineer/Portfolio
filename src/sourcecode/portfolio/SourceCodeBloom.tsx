function SourceCodeToken() {
  return (
    <>
      <span className='db'>public void OnMouseEnter</span>()
      <br />
      &#123;
      <br />
      {'  '}
      <span className='comment'>// Display a text box.</span>
      <br />
      &#125;
      <br />
      <br />
      <span className='db'>public void OnMouseExit</span>()
      <br />
      &#123;
      <br />
      {'  '}
      <span className='comment'>// Hide the text box.</span>
      <br />
      &#125;
      <br />
      <br />
      <span className='db'>public void OnMouseDown</span>()
      <br />
      &#123;
      <br />
      {'  '}
      <span className='comment'>
        // Set a boolean true and pickup the flower.
      </span>
      <br />
      &#125;
      <br />
      <br />
      <span className='db'>public void OnMouseUp</span>()
      <br />
      &#123;
      <br />
      {'  '}
      <span className='comment'>
        // Set the boolean to false and handle flower dropping.
      </span>
      <br />
      &#125;
    </>
  );
}

export default SourceCodeToken;
