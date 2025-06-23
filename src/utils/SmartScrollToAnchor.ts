function SmartScrollToAnchor(
  event: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  path: string
) {
  event.preventDefault();

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
