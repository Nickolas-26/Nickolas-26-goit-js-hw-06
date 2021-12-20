let counterValue = 0;


const decrementBnt = document.querySelector('button[data-action="decrement"]');
const incrementBnt = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');


incrementBnt.addEventListener('click', (e) => {
    counterValue += 1
    value.textContent = counterValue
    
})

decrementBnt.addEventListener('click', (e) => {
   counterValue -= 1
   value.textContent = counterValue
})




