
let shoopButton = document.getElementById('product__button')

let shoopingCartClose = document.getElementById('shooping-cart__close');

shoopingCartClose.addEventListener('click', modal )
shoopButton.addEventListener("click",modal)


function modal(){  

    const cart = document.getElementById('shooping-cart')

    cart.classList.toggle('l-show-modal')
    

    document.body.classList.toggle('showing-modal')

}



