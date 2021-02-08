import cProducto from "./c-producto.js";
import shoopingCart from './shooping-cart.js'
import {seon} from '../../dataBase/data.js'
import headerShop from './headerShop.js'

export default (id) =>{
    //asigno el header del shop 
    const header = headerShop()

    //creo el elemento shopPage
    const shopPage = document.createElement('div')
    shopPage.setAttribute('id','shoop')
    shopPage.classList.add('l-shop')

    
    const test = ""
    const producto = {nombre:"set portavasos chavita", id:'1'}
    
    const view = `
    <div class="c-separation-line"></div>

    <p class="c-condition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur beatae pedit quasi. Alias, nam repudiandae! Harum.</p>

    <div class="c-get-back c-button c-button--green">Volver</div>`

    shopPage.innerHTML = view

    //agrega los componentes 
    shopPage.prepend(cProducto(id))
    shopPage.appendChild(shoopingCart())

    //asignación de eventos a los botones
    let shoopButton = shopPage.querySelector('#product__button')
    let shoopingCartClose = shopPage.querySelector('#shooping-cart__close');
    //funcionalidad botones del header
    const headerCartButton =  header.querySelector('#headerCartButton')
    const headerHomeButton = header.querySelector('#headerHomeButton')
    let backButton = shopPage.querySelector(".c-get-back")

    //funcionalida de los botones
    shoopingCartClose.addEventListener('click', modal )
    shoopButton.addEventListener("click",modal)
    
    headerCartButton.addEventListener('click',modal)
    headerHomeButton.addEventListener('click',()=> window.location.hash = '')
    
    //hay que modificar mejor la función
    // backButton.addEventListener('click',()=> window.location.hash = '')

    window.document.body.prepend(header)

    return shopPage

}

function incrementCart(){

}

function modal(){  

    const cart = document.getElementById('shooping-cart')

    cart.classList.toggle('l-show-modal')
    

    document.body.classList.toggle('showing-modal')

}


