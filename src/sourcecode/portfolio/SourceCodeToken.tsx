function SourceCodeToken() {
  return (
    <>
      <span className='db'>namespace </span>
      <span className='delegates'>EasyAutoScript</span>
      <br />
      <span className='y'>&#123;</span>
      <br />
      {'  '}
      <span className='comment'>/// &lt;summary&gt;</span>
      <br />
      {'  '}
      <span className='comment'>/// Makes and stores a "token"</span>
      <br />
      {'  '}
      <span className='comment'>/// &lt;/summary&gt;</span>
      <br />
      {'  '}
      <span className='db'>public class </span>
      <span className='delegates'>Token</span>
      <span className='p'>(</span>
      <span className='lb'>TokenType Type</span>,
      <span className='db'> string </span>
      <span className='lb'>Lexeme</span>, <span className='db'>object</span>?
      <span className='lb'> Literal</span>, <span className='db'>int</span>
      <span className='lb'> Line</span>
      <span className='p'>)</span>
      <br />
      {'  '}
      <span className='p'>&#123;</span>
      <br />
      {'    '}
      <span className='db'>public </span>
      <span className='lb'>TokenType Type</span>
      <span className='db'> &#123; get</span>;{' '}
      <span className='db'>&#125; </span>= <span className='lb'>Type</span>;{' '}
      <span className='comment'>// TokenType</span>
      <br />
      {'    '}
      <span className='db'>public string</span>{' '}
      <span className='lb'>Lexeme</span> <span className='db'>&#123; get</span>;{' '}
      <span className='db'>&#125; </span>= <span className='lb'>Lexeme</span>;
      <span className='comment'> // The text that was found: "Hello"</span>
      <br />
      {'    '}
      <span className='db'>public object</span>?{' '}
      <span className='lb'>Literal</span> <span className='db'>&#123; get</span>
      ; <span className='db'>&#125; </span>=<span className='lb'> Literal</span>
      ;<span className='comment'> // The actual value: Hello</span>
      <br />
      {'    '}
      <span className='db'>public int</span> <span className='lb'>Line</span>{' '}
      <span className='db'>&#123; get</span>;{' '}
      <span className='db'>&#125; </span>= <span className='lb'>Line</span>;{' '}
      <span className='comment'> // The line for debugging</span>
      <br />
      <br />
      {'    '}
      <span className='comment'>/// &lt;summary&gt;</span>
      <br />
      {'    '}
      <span className='comment'>
        /// Overrides the Token.ToString() method.
      </span>
      <br />
      {'    '}
      <span className='comment'>/// &lt;/summary&gt;</span>
      <br />
      {'    '}
      <span className='comment'>
        /// &lt;returns&gt;&lt;/returns&gt; Returns: $"&#123;Type&#125;
        &#123;Lexeme&#125; &#123;Literal&#125; &#123;Line&#125;";
      </span>
      <br />
      {'    '}
      <span className='db'>public override string</span>{' '}
      <span className='y'>ToString</span>
      <span className='db'>()</span>
      <br />
      {'    '}
      <span className='db'>&#123;</span>
      <br />
      {'      '}
      <span className='p'>return</span> <span className='r'>$"</span>
      <span className='y'>&#123;</span>
      <span className='lb'>Type</span>
      <span className='y'>&#125;</span> <span className='y'>&#123;</span>
      <span className='lb'>Lexeme</span>
      <span className='y'>&#125;</span> <span className='y'>&#123;</span>
      <span className='lb'>Literal</span>
      <span className='y'>&#125;</span> <span className='y'>&#123;</span>
      <span className='lb'>Line</span>
      <span className='y'>&#125;</span>
      <span className='r'>"</span>;
      <br />
      {'    '}
      <span className='db'>&#125;</span>
      <br />
      {'  '}
      <span className='p'>&#125;</span>
      <br />
      <span className='y'>&#125;</span>
    </>
  );
}

export default SourceCodeToken;
