const button = document.querySelector('.collapsible__button');
const content = document.querySelector('.collapsible__content');

let collapsibleAnimation= [
  {transform: 'translateY(0) rotateX(0deg)', opacity: '1'},
  {transform: 'translateY(100px) rotateX(360deg)', opacity: '0'}
]

let collapsibleOption = {
  duration: 1000
}

button.addEventListener('click', () => {
  if (content.style.opacity === '0') {
    content.animate(
      collapsibleAnimation,
      collapsibleOption
    ).reverse();
    setTimeout(() => {
      content.style.opacity = 1;
    }, 900)
  } else {
    content.animate(
      collapsibleAnimation,
      collapsibleOption
    );
    setTimeout(() => {
      content.style.opacity = 0;
    }, 900)
  }
});
