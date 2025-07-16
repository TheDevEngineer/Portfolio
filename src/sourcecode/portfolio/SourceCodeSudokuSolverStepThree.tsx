function SourceCodeSudokuSolverStepThree() {
  return (
    <>
      <span className='db'>private</span> <span className='db'>bool</span>{' '}
      <span className='y'>Possible</span>(<span className='db'>int</span>{' '}
      <span className='lb'>guessingNum</span>, <span className='db'>int</span>{' '}
      <span className='lb'>currentX</span>, <span className='db'>int</span>{' '}
      <span className='lb'>currentY</span>)br
      <br />
      &#123;
      <br />
      {'  '}
      <span className='comment'>// Left right 0 1 2 3 4 5 6 7 8.</span>
      <br />
      {'  '}
      <span className='p'>for</span> (<span className='db'>int</span>{' '}
      <span className='lb'>xCell</span> = <span className='numbers'>0</span>;{' '}
      <span className='lb'>xCell</span> &lt; <span className='numbers'>9</span>;{' '}
      <span className='lb'>xCell</span>++)
      <br />
      {'  '}&#123;
      <br />
      {'    '}
      <span className='comment'>
        // If we are guessing 3 and the row it is checking contains it return
        false and.
      </span>
      <br />
      {'    '}
      <span className='comment'>
        // check for the next possible number which in this case is 4.
      </span>
      <br />
      {'    '}
      <span className='p'>if</span> (<span className='lb'>guessingNum</span> ==
      grid[<span className='lb'>currentY</span>,{' '}
      <span className='lb'>xCell</span>])
      <br />
      {'    '}&#123;
      <br />
      {'      '}
      <span className='p'>return</span> <span className='db'>false</span>;<br />
      {'    '}&#125;
      <br />
      {'  '}&#125;
      <br />
      <br />
      {'  '}
      <span className='comment'>// Up down 0 1 2 3 4 5 6 7 8 9.</span>
      <br />
      {'  '}
      <span className='p'>for</span> (<span className='db'>int</span>{' '}
      <span className='lb'>yCell</span> = <span className='numbers'>0</span>;{' '}
      <span className='lb'>yCell</span> &lt; <span className='numbers'>9</span>;{' '}
      <span className='lb'>yCell</span>++)
      <br />
      {'  '}&#123;
      <br />
      {'    '}
      <span className='comment'>
        // Same but for column so the x remains the same the y changes.
      </span>
      <br />
      {'    '}
      <span className='p'>if</span> (<span className='lb'>guessingNum</span> ==
      grid[<span className='lb'>yCell</span>,{' '}
      <span className='lb'>currentX</span>])
      <br />
      {'    '}&#123;
      <br />
      {'      '}
      <span className='p'>return</span> <span className='db'>false</span>;<br />
      {'    '}&#125;
      <br />
      {'  '}&#125;
      <br />
      <br />
      {'  '}
      <span className='comment'>
        // Work out grid sector with maths for example slot [8, 8] first 3 by 3
        cell area is calculated by doing.
      </span>
      <br />
      {'  '}
      <span className='comment'>
        // 8 / 3 = 2.6r rounded down is 2 then * 3 is 6 so it's [6, 6] cell
        region.
      </span>
      <br />
      {'  '}
      <span className='db'>int</span> <span className='lb'>xCellFloored</span> =
      (<span className='db'>int</span>)<span className='struct'>Mathf</span>.
      <span className='y'>Floor</span>(<span className='lb'>currentX</span> /{' '}
      <span className='numbers'>3</span>);
      <br />
      {'  '}
      <span className='db'>int</span> <span className='lb'>yCellFloored</span> =
      (<span className='db'>int</span>)<span className='struct'>Mathf</span>.
      <span className='y'>Floor</span>(<span className='lb'>currentY</span> /{' '}
      <span className='numbers'>3</span>);
      <br />
      {'  '}
      <span className='lb'>xCellFloored</span> *={' '}
      <span className='numbers'>3</span>;<br />
      {'  '}
      <span className='lb'>yCellFloored</span> *={' '}
      <span className='numbers'>3</span>;<br />
      <br />
      {'  '}
      <span className='comment'>// Iterate through grid 0 1 2 on X.</span>
      <br />
      {'  '}
      <span className='comment'>
        // Which would be cells: [6, 6] [6, 7] [6, 8] then for [7, x] and [8,
        x].
      </span>
      <br />
      {'  '}
      <span className='p'>for</span> (<span className='db'>int</span>{' '}
      <span className='lb'>x</span> = <span className='lb'>xCellFloored</span>;{' '}
      <span className='lb'>x</span> &lt;{' '}
      <span className='lb'>xCellFloored</span> +{' '}
      <span className='numbers'>3</span>; <span className='lb'>x</span>++)
      <br />
      {'  '}&#123;
      <br />
      {'    '}
      <span className='p'>for</span> (<span className='db'>int</span>{' '}
      <span className='lb'>y</span> = <span className='lb'>yCellFloored</span>;{' '}
      <span className='lb'>y</span> &lt;{' '}
      <span className='lb'>yCellFloored</span> +{' '}
      <span className='numbers'>3</span>; <span className='lb'>y</span>++)
      <br />
      {'    '}&#123;
      <br />
      {'      '}
      <span className='p'>if</span> (<span className='lb'>guessingNum</span> ==
      grid[<span className='lb'>y</span>, <span className='lb'>x</span>])
      <br />
      {'      '}&#123;
      <br />
      {'        '}
      <span className='p'>return</span> <span className='db'>false</span>;<br />
      {'      '}&#125;
      <br />
      {'    '}&#125;
      <br />
      {'  '}&#125;
      <br />
      <br />
      {'  '}
      <span className='comment'>
        // If we didn't return false (fail the check) it is a possible number
        therefore try solve with it.
      </span>
      <br />
      {'  '}
      <span className='p'>return</span> <span className='db'>true</span>;<br />
      &#125;
    </>
  );
}

export default SourceCodeSudokuSolverStepThree;
