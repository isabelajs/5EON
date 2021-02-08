import cProducto from "./c-producto.js";
import shoopingCart from './shooping-cart.js'

export default (id) =>{

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
    shopPage.prepend(cProducto())
    shopPage.appendChild(shoopingCart())

    //asigna la función modal    
    let shoopButton = shopPage.querySelector('#product__button')

    let shoopingCartClose = shopPage.querySelector('#shooping-cart__close');

    shoopingCartClose.addEventListener('click', modal )
    shoopButton.addEventListener("click",modal)


    return shopPage

}



function modal(){  

    const cart = document.getElementById('shooping-cart')

    cart.classList.toggle('l-show-modal')
    

    document.body.classList.toggle('showing-modal')

}


