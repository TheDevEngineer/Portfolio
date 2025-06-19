function SourceCodeFlexbox() {
  return (
    <>
      <span className='function'>function </span>
      <span className='name'>ReplaceString</span>
      <span className='yellowbracket'>(</span>
      <br />
      {'  '}
      <span className='var'>stringToFind</span>:
      <span className='delegate'> string</span>,
      <br />
      {'  '}
      <span className='var'>stringToReplaceWith</span>:
      <span className='delegate'> string</span>,
      <br />
      {'  '}
      <span className='var'>modified</span>:
      <span className='delegate'> string</span>,
      <br />
      <span className='yellowbracket'>) &#123;</span>
      <br />
      {'  '}
      <span className='function'>const </span>
      <span className='darkvar'>finds</span>:
      <span className='delegate'> number</span>
      <span className='pink'>[] </span>=<span className='pink'> []</span>;<br />
      {'  '}
      <span className='pink'>for (</span>
      <span className='function'>let </span>
      <span className='var'>i</span> = <span className='number'>0</span>;
      <span className='var'> i</span> &lt; <span className='var'>modified</span>
      .<span className='darkvar'>length</span>; <span className='var'>i</span>++
      <span className='pink'>) &#123;</span>
      <br />
      {'    '}
      <span className='pink'>if </span>
      <span className='darkvar'>(</span>
      <span className='var'>modified</span>
      <span className='yellowbracket'>[</span>
      <span className='var'>i</span>
      <span className='yellowbracket'>]</span> ==={' '}
      <span className='var'>stringToFind</span>
      <span className='darkvar'>) &#123;</span>
      <br />
      {'      '}
      <span className='darkvar'>finds</span>.<span className='name'>push</span>
      <span className='yellowbracket'>(</span>
      <span className='var'>i</span>
      <span className='yellowbracket'>)</span>;<br />
      {'    '}
      <span className='darkvar'>&#125;</span>
      <br />
      {'  '}
      <span className='pink'>&#125;</span>
      <br />
      <br />
      {'  '}
      <span className='pink'>for (</span>
      <span className='function'>let </span>
      <span className='var'>j</span> = <span className='darkvar'>finds</span>.
      <span className='var'>length</span> - <span className='number'>1</span>;
      <span className='var'> j</span> &gt;= <span className='number'>0</span>;{' '}
      <span className='var'>j</span>--
      <span className='pink'>) &#123;</span>
      <br />
      {'    '}
      <span className='darkvar'>const i</span> ={' '}
      <span className='darkvar'>finds[</span>
      <span className='var'>j</span>
      <span className='darkvar'>]</span>;<br />
      {'    '}
      <span className='var'>modified</span> =<br />
      {'      '}
      <span className='var'>modified</span>.
      <span className='name'>substring</span>
      <span className='darkvar'>(</span>
      <span className='number'>0</span>, <span className='darkvar'>i)</span> +{' '}
      <br />
      {'      '}
      <span className='var'>stringToReplaceWith</span> +<br />
      {'      '}
      <span className='var'>modified</span>.
      <span className='name'>substring</span>
      <span className='darkvar'>(i</span> + <span className='number'>1</span>
      <span className='darkvar'>)</span>;<br />
      {'  '}
      <span className='pink'>&#125;</span>
      <br />
      {'  '}
      <span className='pink'>return </span>
      <span className='var'>modified</span>;
      <br />
      <span className='yellowbracket'>&#125;</span>
    </>
  );
}

export default SourceCodeFlexbox;
