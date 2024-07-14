let topCart = document.querySelector('.topCart')

let badge = document.querySelector('.badge')
let linkTop = document.querySelector('.inside')

let lock = document.getElementById('row')

function products() {
    getProd = product.map((item)=>{
        return `
        <div class="col-lg-6">
        <div class="card my-2 flex-row flex-grow-1">
          <img src="${item.img_url}" width="200px" alt="sora">
          <div class="card-body row flex-column">
            <h4>${item.productName}</h4>
            <p>${item.desc}</p>
            <div class="card flex-row border-0 w-auto position-relative">
              <span class="p-1 border-1 border-dark border-bottom border-start border-top">size: ${item.size}</span>
              <span class="p-1 bg-dark text-light">price: ${item.price}</span>
            </div>
            <button class="btn btn-info w-25 position-absolute top-0 end-0" onclick="addTocart(${item.id})">add to cart</button>
          </div>
      </div>
      </div>
        `
    })
    lock.innerHTML = getProd
}
products()

let container = localStorage.getItem('cartProduct') ? JSON.parse(localStorage.getItem('cartProduct')) : [];
function addTocart(id) {
    if (localStorage.getItem('username')) {
        let getItem = product.find((prodItem)=> prodItem.id == id )
        linkTop.innerHTML += `<p class="pTopCart">${getItem.productName}</p>`
    
        container = [...container , getItem]
        localStorage.setItem("cartProduct", JSON.stringify(container))

        let pLength = document.querySelectorAll('.pTopCart')
        badge.innerHTML = pLength.length
    } else {
        window.location = 'log in.html'
    }

}

let iconShop = document.getElementById('iconShop')
iconShop.addEventListener('click', function () {
    if (topCart.innerHTML != '') {
        if (topCart.style.display == 'block') {
            topCart.style.display = 'none'
        }else{
            topCart.style.display = 'block'
        }
    }
})

let btnCart = document.getElementById('btnCart')
btnCart.addEventListener('click', function(){
    window.location = 'cart.html'
})