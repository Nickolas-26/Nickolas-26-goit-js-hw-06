const refs = {
   form: document.querySelector('.login-form'),
    login: document.querySelectorAll('input')[0],
   password: document.querySelectorAll('input')[1],
    btn: document.querySelector('button')
}
function log(event) {
    event.preventDefault()
    // const email = refs.form.elements.email;
    // const password = refs.form.elements.password;
    const {
        email, password
    } = refs.form.elements;
    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены");
    } 
    
    console.log(`email: ${email.value},password: ${password.value}`) 
    event.currentTarget.reset()
}
    
refs.form.addEventListener('submit', log)
