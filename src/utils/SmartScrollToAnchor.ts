function SmartScrollToAnchor(
  event: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  path: string
) {
  event.preventDefault();

  if (id === 'header' && path === '/Portfolio/') {
    if (
      window.location.href.includes('/Portfolio/#/') &&
      (window.location.hash.match(new RegExp('#', 'g')) || []).length != 2
    ) {
      window.location.href = '/Portfolio/';
      return;
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return;
  }

  if (
    window.location.hash === '' ||
    (window.location.hash.match(new RegExp('#', 'g')) || []).length == 2
  ) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', `${path}#/#${id}`);
    }
  } else {
    window.location.href = `${path}#/#${id}`;
  }
}

export default SmartScrollToAnchor;
