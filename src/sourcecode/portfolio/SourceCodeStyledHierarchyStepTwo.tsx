function SourceCodeStyledHierarchyStepOne() {
  return (
    <>
      <span>
        <span className='db'>using</span> UnityEditor;
        <br />
        <br />
        <span className='comment'>
          // We can load the script everytime Unity refreshes with this call:
        </span>
        <br />[<span className='delegates'>InitializeOnLoad</span>]
        <br />
        <span className='db'>public class </span>
        <span className='delegates'>StyledHierarchy</span>
        <br />
        &#123;
        <br />
        {'  '}
        <span className='comment'>
          // This is the method that is called by default on load/refresh.
        </span>
        <br />
        {'  '}
        <span className='db'>static </span>
        <span className='delegates'>StyledHierarchy</span>()
        <br />
        {'  '}&#123;
        <br />
        {'    '}
        <span className='comment'>
          // A delegate (function) that is called for every visible item in the
          Hierarchy.
        </span>
        <br />
        {'    '}
        <span className='delegates'>EditorApplication</span>
        .hierarchyWindowItemOnGUI += <span className='y'>Draw</span>;
        <br />
        {'  '}&#125;
        <br />
        <br />
        {'  '}
        <span className='comment'>
          // The method that we are going to be using to draw our custom icons.
        </span>
        <br />
        {'  '}
        <span className='db'>private static void</span>{' '}
        <span className='y'>Draw</span>(<span className='db'>int </span>
        <span className='lb'>instanceID</span>,{' '}
        <span className='struct'>Rect</span>{' '}
        <span className='lb'>selectionRect</span>)
        <br />
        {'  '}&#123;
        <br />
        <br />
        {'  '}&#125;
        <br />
        &#125;
      </span>
    </>
  );
}

export default SourceCodeStyledHierarchyStepOne;
