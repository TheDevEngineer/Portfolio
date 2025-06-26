function SourceCodeHealthManagerSO() {
  return (
    <>
      <span className='db'>using</span> UnityEngine;
      <br />
      <span className='db'>using</span> UnityEngine.Events;
      <br />
      <br />
      <span className='db'>namespace</span> Managers
      <br />
      &#123;
      <br />
      {'  '}[<span className='delegates'>CreateAssetMenu</span>(fileName = "
      <span className='r'>HealthManagerScriptableObject</span>", menuName = "
      <span className='r'>HealthManagerScriptableObject</span>")]
      <br />
      {'  '}
      <span className='db'>public</span> <span className='db'>class</span>{' '}
      <span className='delegates'>HealthManagerScriptableObject</span> :
      <span className='delegates'> ScriptableObject</span>
      <br />
      {'  '}&#123;
      <br />
      {'    '}
      <span className='db'>public</span> <span className='db'>int</span> health
      = <span className='numbers'>1</span>
      <span className='numbers'>0</span>;<br />
      {'    '}
      <span className='db'>public</span> <span className='db'>int</span>{' '}
      maxHealth = <span className='numbers'>1</span>
      <span className='numbers'>0</span>;<br />
      {'    '}
      [System.<span className='delegates'>NonSerialized</span>]
      <span className='db'> public </span>
      <span className='delegates'>UnityEvent</span>
      &lt;<span className='db'>int</span>&gt; healthChangeEvent;
      <br />
      <br />
      {'    '}
      <span className='db'>private</span>{' '}
      <span className='db'>void OnEnable</span>()
      <br />
      {'    '}
      &#123;
      <br />
      {'      '}health = maxHealth;
      <br />
      {'      '}
      healthChangeEvent ??= <span className='db'>new </span>
      <span className='delegates'>UnityEvent</span>&lt;
      <span className='db'>int</span>&gt;();
      <br />
      {'    '}
      &#125;
      <br />
      <br />
      {'    '}
      <span className='db'>public</span> <span className='db'>void </span>
      <span className='y'>DecreaseHealth</span>(<span className='db'>int </span>
      <span className='lb'>amount</span>)
      <br />
      {'    '}
      &#123;
      <br />
      {'      '}health -= <span className='lb'>amount</span>;<br />
      {'      '}healthChangeEvent.<span className='y'>Invoke</span>(health);
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

export default SourceCodeHealthManagerSO;
