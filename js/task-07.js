const refs = {
    fonSize: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}

refs.fonSize.addEventListener('input', () => {
    // console.log(refs.fontSize.value);
    refs.text.style.fontSize = refs.fonSize.value+"px";

})