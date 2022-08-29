const collapsible = document.querySelector('.collapsible');
const button = document.querySelector('.collapsible__button');
const visible = document.querySelector('.collapsible__action--visible');
const hidden = document.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

collapsible.style.width = '850px';
collapsible.style.margin = '20px auto';

const contentAnimation= [
  {fontSize: '20px', opacity: '1', color: 'black'},
  {fontSize: '25px', opacity: '1', color: 'green', offset: 0.4},
  {fontSize: '1px', opacity: '0', color: 'red'},
];
const buttonAnimation = [
  {transform: 'rotateX(0)'},
  {transform: 'rotateX(360deg)'}
];
const buttonTextAnimation = [
  {opacity: '1'},
  {opacity: '0'}
];

const collapsibleOption = {
  duration: 1000
};

button.style.width = '300px';
button.style.height = '50px';
button.style.cursor = 'pointer';
content.style.fontSize = '20px';
hidden.style.display = 'none';

button.addEventListener('click', () => {
  if (content.style.opacity !== '0') {
    content.animate(
      contentAnimation,
      collapsibleOption
    );
    button.animate(
      buttonAnimation,
      collapsibleOption
    );
    visible.animate(
      buttonTextAnimation,
      collapsibleOption
    );
    button.disabled = 'true';

    setTimeout(() => {
      visible.style.display = 'none';
      hidden.style.display = 'inline';
    }, 700);
    setTimeout(() => {
      button.disabled = false;
      content.style.opacity = 0;
    }, 900)
  } else if (content.style.opacity === '0') {
    content.animate(
      contentAnimation,
      collapsibleOption
    ).reverse();
    button.animate(
      buttonAnimation,
      collapsibleOption
    ).reverse();
    hidden.animate(
      buttonTextAnimation,
      collapsibleOption
    );
    button.disabled = 'true';

    setTimeout(() => {
      hidden.style.display = 'none';
      visible.style.display = 'inline';
    }, 700);
    setTimeout(() => {
      button.disabled = false;
      content.style.opacity = 1;
    }, 900)
  }
});
