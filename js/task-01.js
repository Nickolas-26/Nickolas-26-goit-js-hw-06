const navEl = document.querySelector('#categories');

const items = navEl.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

[...items].forEach(item => {
    console.log(item)
    console.log(item.querySelector('h2').textContent)
    console.log(item.querySelectorAll('li').length)

})


// -----
 
// const itemList = [...items].map(item => {
//     return `Category :  ${item.querySelector('h2').textContent}\n
//     elements: ${item.querySelectorAll('li').length}`;

// }).join('\n')
// console.log(itemList)
