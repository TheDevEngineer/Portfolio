function SourceCodeRenderEnablerEditor() {
  return (
    <>
      <span className='db'>using</span> UnityEditor;
      <br />
      <span className='db'>using</span> UnityEngine;
      <br />
      <br />[<span className='delegates'>CustomEditor</span>(
      <span className='db'>typeof</span>(
      <span className='delegates'>RenderEnabler</span>))]
      <br />
      <span className='db'>public</span> <span className='db'>class</span>{' '}
      <span className='delegates'>RenderEnablerEditor</span> :{' '}
      <span className='delegates'>Editor</span>
      <br />
      &#123;
      <br />
      {'  '}
      <span className='db'>private </span>
      <span className='delegates'>RenderEnabler</span> renderEnabler;
      <br />
      <br />
      {'  '}
      <span className='db'>private void OnEnable</span>()
      <br />
      {'  '}&#123;
      <br />
      {'    '}renderEnabler = (<span className='delegates'>RenderEnabler</span>
      )target;
      <br />
      {'  '}&#125;
      <br />
      <br />
      {'  '}
      <span className='db'>public</span> <span className='db'>override</span>{' '}
      <span className='db'>void</span> <span className='y'>OnInspectorGUI</span>
      ()
      <br />
      {'  '}&#123;
      <br />
      {'    '}
      <span className='db'>base</span>.<span className='y'>OnInspectorGUI</span>
      ();
      <br />
      {'    '}
      <span className='p'>if</span> (
      <span className='delegates'>GUILayout</span>.
      <span className='y'>Button</span>("
      <span className='r'>Enable/Disable MeshRenderers</span>"))
      <br />
      {'    '}
      &#123;
      <br />
      {'      '}
      renderEnabler.<span className='y'>EnableRenderers</span>
      (!renderEnabler.currentState);
      <br />
      {'    '}
      &#125;
      <br />
      {'  '}
      &#125;
      <br />
      &#125;
    </>
  );
}

export default SourceCodeRenderEnablerEditor;
