// sign up
let userName = document.getElementById('username')
let email = document.getElementById('E-mail')
let password = document.getElementById('password')

let submit = document.getElementById('submit')

submit.addEventListener('click', registar)
function registar(e) {
    e.preventDefault();
    if (userName.value === '' || email.value === '' || password.value === '') {
        alert('خطأ في ادخال البايانات')
    }else{
        localStorage.setItem('username', userName.value)
        localStorage.setItem('password', password.value)
        localStorage.setItem('email', email.value)
    }
    setTimeout(() => {
        window.location = 'log in.html'
    }, 1500);
}