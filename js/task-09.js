const refs = {
  widget: document.querySelector('.widget'),
  backgroundColor: document.querySelector('.color'),
  btn: document.querySelector('.change-color')
}
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }

const random = e => {
  const randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor;
  refs.backgroundColor.textContent = randomColor;
}
refs.btn.addEventListener('click', random);




