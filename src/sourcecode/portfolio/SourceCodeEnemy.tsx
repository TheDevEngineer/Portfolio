function SourceCodeEnemy() {
  return (
    <>
      <span className='db'>protected bool </span>
      <span className='y'>IsInHearingRange</span>(
      <span className='delegates'>Transform </span>
      <span className='lb'>player</span>, <span className='db'>int </span>
      <span className='lb'>playerIndex</span>)<br />
      &#123;
      <br />
      {'  '}
      <span className='p'>if </span>(<span className='lb'>player</span> ==
      <span className='db'> null</span>)<br />
      {'    '}
      <span className='p'>return </span>
      <span className='db'>false</span>;<br />
      <br />
      <span className='p'>return </span>
      <span className='struct'>Vector3</span>.
      <span className='y'>Distance</span>(transform.position,
      <span className='lb'> player</span>.position) &lt;= playerHearingRanges[
      <span className='lb'>playerIndex</span>];
    </>
  );
}

export default SourceCodeEnemy;
