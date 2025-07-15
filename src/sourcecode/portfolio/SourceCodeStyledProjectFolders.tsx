function SourceCodeStyledProjectFolders() {
  return (
    <>
      <span className='db'>using</span> UnityEditor;
      <br />
      <span className='db'>using</span> UnityEngine;
      <br />
      <br />
      <span className='comment'>
        // We can load the script everytime Unity refreshes with this call.
      </span>
      <br />[<span className='delegates'>InitializeOnLoad</span>]<br />
      <span className='db'>public</span> <span className='db'>static</span>{' '}
      <span className='db'>class</span>
      <span className='delegates'> StyledProjectFolders</span>
      <br />
      &#123;
      <br />
      {'  '}
      <span className='db'>private</span> <span className='db'>static</span>{' '}
      <span className='db'>readonly</span>{' '}
      <span className='delegates'>Texture</span> folderIcon;
      <br />
      <br />
      {'  '}
      <span className='db'>static</span>{' '}
      <span className='delegates'>StyledProjectFolders</span>()
      <br />
      {'  '}&#123;
      <br />
      {'    '}
      <span className='comment'>
        // For this example I have drawn a quick Folder and put it in a
        "Resources" folder.
      </span>
      <br />
      {'    '}
      folderIcon = <span className='delegates'>Resources</span>.
      <span className='y'>Load</span>(<span className='r'>"Folder"</span>){' '}
      <span className='db'>as</span> <span className='delegates'>Texture</span>;
      <br />
      <br />
      {'    '}
      <span className='comment'>
        // Unity API for when the project window is "re-drawn".
      </span>
      <br />
      {'    '}
      <span className='delegates'>EditorApplication</span>
      .projectWindowItemOnGUI += <span className='y'>Draw</span>;<br />
      {'  '}&#125;
      <br />
      <br />
      {'  '}
      <span className='db'>private</span> <span className='db'>static</span>{' '}
      <span className='db'>void</span> <span className='y'>Draw</span>(
      <span className='db'>string</span> <span className='lb'>guid</span>,{' '}
      <span className='struct'>Rect</span>{' '}
      <span className='lb'>selectionRect</span>)<br />
      {'  '}&#123;
      <br />
      {'    '}
      <span className='comment'>
        // Using a GUID (unique identifier found in the .meta files) to get a
        folderPath.
      </span>
      <br />
      {'    '}
      <span className='db'>string</span> <span className='lb'>folderPath</span>{' '}
      = <span className='delegates'>AssetDatabase</span>.
      <span className='y'>GUIDToAssetPath</span>(
      <span className='lb'>guid</span>);
      <br />
      <br />
      {'    '}
      <span className='comment'>
        // Null checks and making sure it is a folder.
      </span>
      <br />
      {'    '}
      <span className='p'>if</span> (<span className='lb'>folderPath</span> =={' '}
      <span className='db'>null</span> || <span className='lb'>folderPath</span>{' '}
      == <span className='db'>string</span>.Empty || !
      <span className='delegates'>AssetDatabase</span>.
      <span className='y'>IsValidFolder</span>(
      <span className='lb'>folderPath</span>))
      <br />
      {'    '}
      &#123;
      <br />
      {'      '}
      <span className='comment'>
        // This draws the "Packages" folder as the folderPath is null/empty
        therefore we check for it.
      </span>
      <br />
      {'      '}
      <span className='p'>if</span> (<span className='lb'>selectionRect</span>.y
      &gt; <span className='numbers'>4</span>
      <span className='numbers'>8</span> &&{' '}
      <span className='lb'>selectionRect</span>.height =={' '}
      <span className='numbers'>1</span>
      <span className='numbers'>6</span>)<br />
      {'      '}
      &#123;
      <br />
      {'        '}
      <span className='delegates'>GUI</span>.
      <span className='y'>DrawTexture</span>(<span className='db'>new</span>(
      <span className='lb'>selectionRect</span>.x,{' '}
      <span className='lb'>selectionRect</span>.y,{' '}
      <span className='numbers'>1</span>
      <span className='numbers'>6</span>, <span className='numbers'>1</span>
      <span className='numbers'>6</span>), folderIcon);
      <br />
      {'      '}&#125;
      <br />
      {'      '}
      <span className='p'>return</span>;<br />
      {'    '}
      &#125;
      <br />
      <br />
      {'    '}
      <span className='comment'>
        // If it is in the hierarchy view it's height is 16.
      </span>
      <br />
      {'    '}
      <span className='p'>if</span> (<span className='lb'>selectionRect</span>
      .height == <span className='numbers'>1</span>
      <span className='numbers'>6</span>)<br />
      {'    '}
      &#123;
      <br />
      {'      '}
      <span className='comment'>
        // Draw the folder but make it's new width to be 16 pixels and same with
        the height.
      </span>
      <br />
      {'      '}
      <span className='delegates'>GUI</span>.
      <span className='y'>DrawTexture</span>(<span className='db'>new</span>{' '}
      <span className='struct'>Rect</span>(
      <span className='lb'>selectionRect</span>.x,{' '}
      <span className='lb'>selectionRect</span>.y,{' '}
      <span className='numbers'>1</span>
      <span className='numbers'>6</span>, <span className='numbers'>1</span>
      <span className='numbers'>6</span>), folderIcon);
      <br />
      {'      '}
      <span className='p'>return</span>;<br />
      {'    '}
      &#125;
      <br />
      {'    '}
      <span className='comment'>
        // Else:
        <br />
        {'    '}
        // Draw the folder, as its not 16 pixels high we can use the correct
        selectionRect.
        <br />
        {'    '}
        // But still mess around with values to get the right position.
      </span>
      <br />
      {'    '}
      <span className='struct'>Rect</span> <span className='lb'>newRect</span> ={' '}
      <span className='db'>new</span>(<span className='lb'>selectionRect</span>
      .x - <span className='numbers'>2</span>,{' '}
      <span className='lb'>selectionRect</span>.y -{' '}
      <span className='numbers'>4</span>,<br />
      {'      '}
      <span className='lb'>selectionRect</span>.width +{' '}
      <span className='numbers'>4</span>,{' '}
      <span className='lb'>selectionRect</span>.height -{' '}
      <span className='numbers'>1</span>
      <span className='numbers'>2</span>);
      <br />
      <br />
      {'    '}
      <span className='delegates'>GUI</span>.
      <span className='y'>DrawTexture</span>(<span className='lb'>newRect</span>
      , folderIcon);
      <br />
      {'  '}&#125;
      <br />
      &#125;
    </>
  );
}

export default SourceCodeStyledProjectFolders;
