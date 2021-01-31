// let icon = document.getElementById("icon");
// icon.addEventListener("click", ()=>{desplegable(icon)});

function desplegable(icon){
    let menu = icon.nextSibling.nextSibling
        menu.classList.toggle("visibility")
    let icono =icon.children[0]
        icono.classList.toggle("fa-bars")
        icono.classList.toggle("fa-times")

}



let button = document.getElementById('button')

let shoopingCartClose = document.getElementById('shooping-cart__close');

shoopingCartClose.addEventListener('click', modal )



button.addEventListener("click",modal)


function modal(){  

    const cart = document.getElementById('shooping-cart')

    cart.classList.toggle('show')

    document.body.classList.toggle('test')

}

  