function SourceCodeSudokuSolverStepTwo() {
  return (
    <>
      <span className='db'>private</span> <span className='db'>bool</span>{' '}
      <span className='y'>Solve</span>()
      <br />
      &#123;
      <br />
      {'  '}
      <span className='comment'>// Upwards.</span>
      <br />
      {'  '}
      <span className='p'>for</span> (<span className='db'>int</span>{' '}
      <span className='lb'>y</span> = <span className='numbers'>0</span>;{' '}
      <span className='lb'>y</span> &lt; <span className='numbers'>9</span>;{' '}
      <span className='lb'>y</span>++)
      <br />
      {'  '}
      &#123;
      <br />
      {'    '}
      <span className='comment'>// Sidewards.</span>
      <br />
      {'    '}
      <span className='p'>for</span> (<span className='db'>int</span>{' '}
      <span className='lb'>x</span> = <span className='numbers'>0</span>;{' '}
      <span className='lb'>x</span> &lt; <span className='numbers'>9</span>;{' '}
      <span className='lb'>x</span>++)
      <br />
      {'    '}&#123;
      <br />
      {'      '}
      iterations++;
      <br />
      {'      '}
      <span className='comment'>
        // Prevents hanging on really hard/impossible grids.
      </span>
      <br />
      {'      '}
      <span className='p'>if</span> (iterations &lt;{' '}
      <span className='numbers'>10000000</span>)<br />
      {'      '}&#123;
      <br />
      {'        '}
      <span className='p'>return</span> <span className='db'>false</span>;<br />
      {'      '}&#125;
      <br />
      {'      '}
      <span className='p'>if</span> (grid[<span className='lb'>y</span>,{' '}
      <span className='lb'>x</span>] == <span className='numbers'>0</span>)
      <br />
      {'      '}&#123;
      <br />
      {'        '}
      <span className='p'>for</span> (<span className='db'>int</span>{' '}
      <span className='lb'>guess</span> = <span className='numbers'>1</span>;{' '}
      <span className='lb'>guess</span> &lt; <span className='numbers'>1</span>
      <span className='numbers'>0</span>; <span className='lb'>guess</span>++)
      <br />
      {'        '}&#123;
      <br />
      {'          '}
      <span className='comment'>
        // Iterate through all possible numbers (1 2 3 4 5 6 7 8 9).
      </span>
      <br />
      {'          '}
      <span className='p'>if</span> (<span className='y'>Possible</span>(
      <span className='lb'>guess</span>, <span className='lb'>x</span>,{' '}
      <span className='lb'>y</span>))
      <br />
      {'          '}&#123;
      <br />
      {'            '}
      <span className='comment'>
        // Tell the grid at y pos and x pos to be this guess if it is possible.
      </span>
      <br />
      {'            '}grid[<span className='lb'>y</span>,{' '}
      <span className='lb'>x</span>] = <span className='lb'>guess</span>;<br />
      {'            '}
      <span className='comment'>
        // If we can now solve continue otherwise backtrack to here and increase
        the possible number.
      </span>
      <br />
      {'            '}
      <span className='y'>Solve</span>();
      <br />
      {'            '}
      <span className='comment'>
        // If we can't solve with that guess, replace it back to 0 as it is now
        unsolved for.
      </span>
      <br />
      {'            '}
      grid[<span className='lb'>y</span>, <span className='lb'>x</span>] ={' '}
      <span className='numbers'>0</span>;<br />
      {'          '}&#125;
      <br />
      {'        '}&#125;
      <br />
      {'        '}
      <span className='comment'>
        // All possible numbers were iterated through therefore it is a unsolved
        cell.
      </span>
      <br />
      {'        '}
      <span className='p'>return</span> <span className='db'>false</span>;<br />
      {'      '}&#125;
      <br />
      {'    '}&#125;
      <br />
      {'  '}&#125;
      <br />
      {'  '}
      <span className='comment'>// Grid was solved.</span>
      <br />
      {'  '}
      <span className='p'>return</span> <span className='db'>true</span>;<br />
      &#125;
    </>
  );
}

export default SourceCodeSudokuSolverStepTwo;
