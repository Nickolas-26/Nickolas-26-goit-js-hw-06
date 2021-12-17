const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryList = images.map(image => {
//   const li = document.createElement('li')
//   // console.log(li)
//   const img = document.createElement('img')
//   img.append(image)
//   li.append(img)
//   console.log(li)
//   // console.log(img)
//   // li.insertAdjacentHTML("afterbegin", img)
//   return li
// })


const galleryList = images.map(image => {
  return `<li><img src="${image.url}" alt="${image.alt}"></li>`

}).join('');

const ul = document.querySelector('.gallery');

ul.insertAdjacentHTML("beforeend", galleryList);