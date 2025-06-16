let openOrClose = false;

const myButton = document.getElementById('toTopButton');

function changeMobileNav() {
  openOrClose = !openOrClose;
  if (openOrClose) {
    document.getElementById('mobileNav').style.height = '100%';
    document.querySelector('body').classList.add('fixed-position');
    myButton.style.display = 'none';
  } else {
    document.getElementById('mobileNav').style.height = '0%';
    document.querySelector('body').classList.remove('fixed-position');
    scrollFunction();
  }
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
}

function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
