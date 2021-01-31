let icon = document.getElementById("icon");
icon.addEventListener("click", ()=>{desplegable(icon)});

function desplegable(icon){
    let menu = icon.nextSibling.nextSibling
        menu.classList.toggle("visibility")
    let icono =icon.children[0]
        icono.classList.toggle("fa-bars")
        icono.classList.toggle("fa-times")

}


let shoopButton = document.getElementById('product__button')

let shoopingCartClose = document.getElementById('shooping-cart__close');

shoopingCartClose.addEventListener('click', modal )
shoopButton.addEventListener("click",modal)


function modal(){  

    const cart = document.getElementById('shooping-cart')

    cart.classList.toggle('show-modal')

    document.body.classList.toggle('showing-modal')

}

  