const refs = { 
    input: document.querySelector('#validation-input'),
      
}
function upDate(add, remove)  {
        refs.input.classList.add(add)
        refs.input.classList.remove(remove)
}

refs.input.addEventListener('blur', event => {
    console.log(event.currentTarget.value.length)
    console.log(event.currentTarget.dataset.length)

    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        
         upDate('valid','invalid')
       
    } else {
        upDate('invalid','valid')
    }
})


