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
        {'    '}
        <span className='comment'>
          // If the GameObject we get from instanceID conversion is null return.
        </span>
        <br />
        {'    '}
        <span className='p'>if</span> (
        <span className='delegates'>EditorUtility</span>.
        <span className='span y'>InstanceIDToObject</span>(
        <span className='lb'>instanceID</span>) =={' '}
        <span className='db'>null</span>)
        <br />
        {'    '}&#123;
        <br />
        {'      '}
        <span className='p'>return</span>;
        <br />
        {'    '}&#125;
        <br />
        <br />
        {'    '}
        <span className='comment'>
          // Store the objectReference from the InstanceID.
        </span>
        <br />
        {'    '}
        <span className='delegates'>Object</span>{' '}
        <span className='lb'>objectReference</span> =
        <span className='delegates'> EditorUtility</span>.
        <span className='span y'>InstanceIDToObject</span>(
        <span className='lb'>instanceID</span>);
        <br />
        <br />
        {'    '}
        <span className='comment'>
          // Store the gameObject by getting the objectReference as a
          GameObject.
        </span>
        <br />
        {'    '}
        <span className='delegates'>GameObject</span>{' '}
        <span className='lb'>gameObject</span> ={' '}
        <span className='lb'>objectReference</span>{' '}
        <span className='db'>as</span>{' '}
        <span className='delegates'>GameObject</span>;
        <br />
        <br />
        {'    '}
        <span className='comment'>
          // Get an array of all components on said GameObject.
        </span>
        <br />
        {'    '}
        <span className='delegates'>Component</span>[]{' '}
        <span className='lb'>gameObjectComponents</span> =
        <span className='lb'> gameObject</span>.
        <span className='span y'>GetComponents</span>&lt;
        <span className='delegates'>Component</span>&gt;();
        <br />
        <br />
        {'    '}
        <span className='db'>int</span> <span className='lb'>offset</span> ={' '}
        <span className='numbers'>0</span>;
        <br />
        <br />
        {'    '}
        <span className='comment'>// Iterate through all components.</span>
        <br />
        {'    '}
        <span className='p'>for</span> (<span className='db'>int</span>{' '}
        <span className='lb'>i</span> = <span className='numbers'>0</span>;{' '}
        <span className='lb'>i </span>
        &lt; <span className='lb'>gameObjectComponents</span>.Length;{' '}
        <span className='lb'>i</span>++)
        <br />
        {'    '}&#123;
        <br />
        {'      '}
        <span className='comment'>
          // Create a Rect at selectionRect xMax (max x position) minus the
          current offset.
        </span>
        <br />
        {'      '}
        <span className='struct'>Rect</span> <span className='lb'>newRect</span>{' '}
        = <span className='db'>new</span>(
        <span className='lb'>selectionRect</span>.xMax -{' '}
        <span className='lb'>offset</span>,{' '}
        <span className='lb'>selectionRect</span>.y,{' '}
        <span className='numbers'>16</span>, <span className='numbers'>16</span>
        );
        <br />
        <br />
        {'      '}
        <span className='comment'>
          // Strip the GUIContent from the component by using
          EditorGUIUtility.ObjectContent.
        </span>
        <br />
        {'      '}
        <span className='delegates'>GUIContent</span>{' '}
        <span className='lb'>componentContent</span> ={' '}
        <span className='delegates'>EditorGUIUtility</span>.
        <span className='y'>ObjectContent</span>(
        <span className='lb'>gameObjectComponents</span>[
        <span className='lb'>i</span>],
        <span className='lb'> gameObjectComponents</span>[
        <span className='lb'>i</span>].
        <span className='y'>GetType</span>());
        <br />
        {'      '}
        <span className='comment'>
          // Then get the Texture2D image from that GUIContent.
        </span>
        <br />
        {'      '}
        <span className='delegates'>Texture2D</span>{' '}
        <span className='lb'>componentTexture</span> ={' '}
        <span className='lb'>componentContent</span>.image{' '}
        <span className='db'>as </span>
        <span className='delegates'>Texture2D</span>;
        <br />
        <br />
        {'      '}
        <span className='comment'>
          // Draw the newly obtained componentTexture at the newRect.
        </span>
        <br />
        {'      '}
        <span className='delegates'>GUI</span>.
        <span className='span y'>DrawTexture</span>(
        <span className='lb'>newRect</span>,{' '}
        <span className='lb'>componentTexture</span>);
        <br />
        <br />
        {'      '}
        <span className='comment'>// Add a 20 pixel offset to the left.</span>
        <br />
        {'      '}
        <span className='lb'>offset</span> +={' '}
        <span className='numbers'>20</span>;
        <br />
        {'    '}&#125;
        <br />
        {'  '}&#125;
        <br />
        &#125;
      </span>
    </>
  );
}

export default SourceCodeStyledHierarchyStepOne;
