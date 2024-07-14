let navbarBrand = document.getElementById('navbarBrand')
let navLink = document.getElementById('navLink') 
let linked = document.getElementById('linked') 
let logout = document.getElementById('logout') 
let logo = document.getElementById('logo') 


let username = localStorage.getItem('username')
if (username) {
    linked.remove()
    navbarBrand.style.display = 'flex'
    navLink.innerHTML = localStorage.getItem('username')
    logo.style.display = 'block'
}
logout.addEventListener('click', function(){
    localStorage.clear()
    setTimeout(() => {
        window.location = 'sign up.html'
    }, 1500);
})