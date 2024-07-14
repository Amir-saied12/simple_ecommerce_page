let lock = document.getElementById('row')
let cartNull = document.querySelector(' .cartNull')


function getProductsInCart(allProduct = []) {
  if (JSON.parse(localStorage.getItem('cartProduct')).length === 0) {
    cartNull.innerHTML = 'there is cart is null &#128528;'
  }
  let product = JSON.parse(localStorage.getItem('cartProduct')) || allProduct
    getProd = product.map((item)=>{
        return `
        <div class="col-lg-6">
        <div class="card my-2 flex-row flex-grow-1">
          <img src="${item.img_url}" width="200px" alt="sora">
          <div class="card-body row flex-column">
            <h4>${item.productName}</h4>
            <p>${item.desc}</p>
            <div class="card flex-row border-0 w-auto">
              <span class="p-1 border-1 border-dark border-bottom border-start border-top">size: ${item.size}</span>
              <span class="p-1 bg-dark text-light">price: ${item.price}</span>
            </div>
            <button class="btn btn-danger mt-2 w-50 m-2" onclick="remove(${item.id})">delete from cart</button>
          </div>
      </div>
      </div>
        `
    })
    lock.innerHTML = getProd
}
getProductsInCart()

function remove(id){
  let getProducts = localStorage.getItem('cartProduct')
  if (getProducts) {
    let items = JSON.parse(getProducts)

    let filterItem = items.filter((item) => item.id !== id)
    localStorage.setItem('cartProduct', JSON.stringify(filterItem))
    getProductsInCart(filterItem)
  }
}