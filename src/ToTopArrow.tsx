import { useEffect, useState } from 'react';

interface Props {
  mobileNavOpen: boolean;
}

const ToTopArrow = ({ mobileNavOpen }: Props) => {
  const [arrowVisibility, setArrowVisibility] = useState(false);
  useEffect(() => {
    const handleScroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setArrowVisibility(true);
      } else {
        setArrowVisibility(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <button
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      id='toTopButton'
      title='Go to top'
      style={{ display: arrowVisibility && !mobileNavOpen ? 'block' : 'none' }}
    >
      <span className='material-symbols-outlined'>arrow_upward</span>
    </button>
  );
};

export default ToTopArrow;
