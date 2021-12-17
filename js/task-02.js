const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const markup = ingredients.map(item => {
  const li = document.createElement('li')

  console.log(li);
  li.classList.add('item')
  li.textContent = item;
  return li;

})

