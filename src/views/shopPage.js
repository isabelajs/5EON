import {componentProduct} from "./c-shopPage/c-producto.js";
import shoopingCart from './c-shopPage/shooping-cart.js'
import {seon} from '../../dataBase/data.js'
import headerShop from './c-shopPage/headerShop.js'
import productCart from './c-shopPage/c-shoping-cart/productCart.js'

export default (id) =>{
    //asigno el header del shop 
    const header = headerShop()

    //creo el elemento shopPage
    const shopPage = document.createElement('div')
    shopPage.setAttribute('id','shoop')
    shopPage.classList.add('l-shop')

    const productItem = seon.findProductById(id)

    
    const view = `
    <div class="c-separation-line"></div>

    <p class="c-condition">${productItem.info}</p>

    <div class="c-get-back c-button c-button--green">Volver</div>`

    shopPage.innerHTML = view

    //agrega los componentes 
    shopPage.prepend(componentProduct(id))
    shopPage.appendChild(shoopingCart())

    //asignación de eventos a los botones
    let shoopButton = shopPage.querySelector('#product__button')
    let shoopingCartClose = shopPage.querySelector('#shooping-cart__close');
    //funcionalidad botones del header
    const headerCartButton =  header.querySelector('#headerCartButton')
    const headerHomeButton = header.querySelector('#headerHomeButton')
    let backButton = shopPage.querySelector(".c-get-back")
    let total = null

    // //funcionalida de los botones
    shoopingCartClose.addEventListener('click', modal )
    shoopButton.addEventListener("click",()=>{
        addProduct()
       
    })
  
    headerCartButton.addEventListener('click',modal)
    headerHomeButton.addEventListener('click', ()=> window.location.hash = '' )
    
    //hay que modificar mejor la función
    backButton.addEventListener('click',()=> window.location.hash = '')

    window.document.body.prepend(header)


    return shopPage

}

function addProduct (){
    let productItem = seon.findProductById(seon.producToSell.id)
    console.log(seon.producToSell)
    let quantitySell = seon.producToSell.units
    let colorStock = seon.producToSell.colorType
    let stock = productItem.stocks[colorStock].quantity
    

    let productMatch = seon.cart.find(element=> element.unitType == seon.producToSell.unitType && element.colorType == colorStock && element.id == seon.producToSell.id)
    let cart = document.querySelector('.l-shooping__products')  

    if (productMatch){
        let quantityFinal = productMatch.units + quantitySell
        if (quantityFinal>stock){
            alert("El producto no contiene el suficiente inventario, intenta con otro color")
        }else{
            productMatch.units += quantitySell
            cantidad(productMatch)
            modal()
            console.log(seon.cart)

           
        }
    }else{ 
        modal()
        let newProduct = {...seon.producToSell}
        seon.cart.push(newProduct)
        cart.appendChild(productCart())
        console.log(seon.cart)
        
    }
    total()
}

function modal(){  

    const cart = document.getElementById('shooping-cart')

    cart.classList.toggle('l-show-modal')
    
    document.body.classList.toggle('showing-modal')

}

function cantidad (productMatch){
    let product = productMatch
    let productsCart= document.querySelectorAll(".c-product-cart")
    productsCart.forEach(element=>{
        if (element.dataset.colortype == product.colorType && element.dataset.id == product.id &&element.dataset.unittype == product.unitType){
            let textNumber = element.querySelector(".c-increment__text")
            textNumber.textContent = product.units
        }

    })
}

function total(){
  
}


// modify total para productToSell

// modifiy Total para carrito



//render carrito 

// ..... cada que necesite abrir el modal "carrito"

// cada vez que el modal se abre se renderiza todo de nuevo

    //layout carrito - productos

    //childrens.remove()

    //los vuelvo a pintar producto.cart

