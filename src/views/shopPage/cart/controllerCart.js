import {seon} from '../../../../dataBase/data.js'
import {componentProduct as cProductCart} from './product.js'

//component cart
const componentCart = ()=> {

    const shoppingCart = document.createElement("div")
    shoppingCart.setAttribute('id','shooping-cart')
    shoppingCart.classList.add("l-shooping-cart")


    const view = `      <div class="c-shooping__header">
                            <h3 class="c-shooping__title">Carrito de compra</h3>
                            <div id="shooping-cart__close" class="c-shooping__close c-button c-button--flat c-button--small"><i class="fas fa-times"></i></div>
                        </div>

                        <div class="l-shooping__products c-scroll">
                     
                        </div>
                        <div class="l-shooping__sell">

                            <div class="c-container c-shooping__discount">
                                <div class="c-two-thirds">
                                    <p>descuento</p> 
                                </div>
                                <div class="c-one-third c-txt-right">
                                    <p>$ ${0}</p> 
                                </div>
                            </div>

                            <div class="c-container c-shooping__value">
                                <div class="c-two-thirds">
                                    <p>Total</p> 
                                </div>
                                <div class="c-one-third c-txt-right">
                                    <p id='totalValueCart'> </p> 
                                </div>
                            </div>

                            <div class="c-shooping__text-condition c-txt-l-14">
                                Los códigos de descuento, los costes de envío y los impuestos se añaden durante el pago.
                            </div>

                            <div class="c-shooping__acept-condition c-checkbox-option">
                                <input type="checkbox" id="buttonConditions">
                                <label for="buttonConditions"> Acepto los terminos y condiciones</label>
                            </div>

                            <div id='finalizeOrder' class="c-button c-button--green">Finalizar pedido</div>


                        </div>`

    shoppingCart.innerHTML = view

    //cierre del modal
    let cartClose = shoppingCart.querySelector('#shooping-cart__close');
    cartClose.addEventListener('click',renderCart)

    let finalizeOrder = shoppingCart.querySelector('#finalizeOrder')
    let statusConditions = shoppingCart.querySelector('#buttonConditions')

    finalizeOrder.addEventListener('click',()=>{
        if(statusConditions.checked){
            renderCart()
            window.location.hash = '#/payment'
        }
    })

    
    return shoppingCart
}


//render (show and hidden component cart (modal))
function renderCart(){  

    const cart = document.getElementById('shooping-cart')

    cart.classList.toggle('l-show-modal')
    document.body.classList.toggle('showing-modal')

    const totalText = cart.querySelector('#totalValue')

    //only if is visible, draw products
    if(cart.classList.contains('l-show-modal')){
        drawProductsCart()
        document.querySelector('#totalValueCart').textContent = `$ ${seon.totalValueCart()}`
    }

}

//remove and update products in list of seon.cart
function drawProductsCart(){
    const cart = document.querySelector('.l-shooping__products')

    Array.from(cart.children).forEach(element=>{
        cart.removeChild(element)
    })

    seon.cart.forEach(product=>{
        cart.appendChild(cProductCart(product))
    })

}

export {componentCart,renderCart}