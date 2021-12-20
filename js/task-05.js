const refs = { 
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
}

refs.input.addEventListener('input', e => {
    console.log(e.currentTarget.value);

    if (e.currentTarget.value === "") {
        refs.output.textContent = "Anonymous";
    } else {
        refs.output.textContent = e.currentTarget.value;
    }
})

// refs.input.addEventListener('input', e => {
//     output.textcontent = e.currentTarget.value;
    
// });
