const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const refs = {
  ul: document.querySelector("#ingredients"),
};
const markup = ingredients.map((item) => {
  const li = document.createElement("li");
  // console.log(li);
  li.textContent = item;
  li.classList.add("item");

  return li;
});
refs.ul.append(...markup);
