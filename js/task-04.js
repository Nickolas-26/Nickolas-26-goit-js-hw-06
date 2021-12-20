let counterValue = 0;
const decrementBnt = document.querySelector('button[data-action="decrement"]')
const incrementBnt = document.querySelector('button[data-action="increment"]')


incrementBnt.addEventListener('click', () => {
    counterValue += 1
    console.log(counterValue)
})

decrementBnt.removeEventListener('click', () => {
    counterValue += 1
    console.log(counterValue)
})



