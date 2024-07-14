let userName = document.getElementById('userName') 
let password = document.getElementById('password') 
let log_in = document.getElementById('log_in')

let getUser = localStorage.getItem('username')
let getPass = localStorage.getItem('password')

log_in.addEventListener('click', login)

function login(e) {
    e.preventDefault();
    if (userName.value === "" || password.value === '') {
        alert('خطأ في ادخال البايانات')
    }else{
        if (
        getUser && 
        getUser.trim() === userName.value.trim()&&
        getPass &&
        getPass === password.value
        ) {
            setTimeout(() => {
                window.location = 'index.html'
            }, 1500);
            console.log("corrct");
        }else{
            console.log("wrong");
        }
    }
}