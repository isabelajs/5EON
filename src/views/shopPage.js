import {seon} from '../../dataBase/data.js'
import {componentHeader as cHeader} from './shopPage/header.js'
import {componentProduct as cProduct} from './shopPage/product/controllerProduct.js'
import {componentCart as cCart, addProductToCart, renderCart} from './shopPage/cart/controllerCart.js'


export default (id) =>{
    //asigno el header del shop 
    const header = cHeader()

    //creo el elemento shopPage
    const shopPage = document.createElement('div')
    shopPage.setAttribute('id','shoop')
    shopPage.classList.add('l-shop')

    const productItem = seon.findProductById(id)

    const view = `  <div class="c-separation-line"></div>

                    <p class="c-condition">${productItem.info}</p>

                    <div class="c-get-back c-button c-button--green">Volver</div>`

    shopPage.innerHTML = view

    //agrega los componentes 
    shopPage.prepend(cProduct(id))
    shopPage.appendChild(cCart())

    //asignación de eventos a los botones
    let shoopButton = shopPage.querySelector('#product__button')
    let shoopingCartClose = shopPage.querySelector('#shooping-cart__close');
    //funcionalidad botones del header
    const headerCartButton =  header.querySelector('#headerCartButton')
    const headerHomeButton = header.querySelector('#headerHomeButton')
    let backButton = shopPage.querySelector(".c-get-back")

    // //funcionalida de los botones
    shoopingCartClose.addEventListener('click',renderCart)
    headerCartButton.addEventListener('click',renderCart)
    headerHomeButton.addEventListener('click', ()=> window.location.hash = '' )
    backButton.addEventListener('click',()=> window.location.hash = '')

    //Agregar al carrito
    shoopButton.addEventListener("click",()=>{

        addProductToCart() ? renderCart() : ''
        
    })
  

    window.document.body.prepend(header)

    return shopPage

}


