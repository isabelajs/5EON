let icon = document.getElementById("icon");
icon.addEventListener("click", ()=>{desplegable(icon)});

function desplegable(icon){
    let menu = icon.nextSibling.nextSibling
        menu.classList.toggle("menu--visibility")
    let icono =icon.children[0]
        icono.classList.toggle("fa-bars")
        icono.classList.toggle("fa-times")

}


// let shoopButton = document.getElementById('product__button')

// let shoopingCartClose = document.getElementById('shooping-cart__close');

// shoopingCartClose.addEventListener('click', modal )
// shoopButton.addEventListener("click",modal)


function modal(){  

    const cart = document.getElementById('shooping-cart')

    cart.classList.toggle('l-show-modal')
    

    document.body.classList.toggle('showing-modal')

}


      
//si se carga la pagina
window.addEventListener("load",modifyHeader);
//evento si se scrollea la pagina
window.addEventListener("scroll",modifyHeader);
//evento si se redimensiona
window.addEventListener("resize",modifyHeader);



function modifyHeader(){
    const width = window.screen.width;
    const header = document.getElementById("header");


    if (width < 768){

        header.classList.remove("header--draw","header--transparent");

    }else if (width >= 768){

    const y = window.scrollY;

    if (y < 490){
        header.classList.remove("header--draw");
        header.classList.add("header--transparent");
    } else {
        header.classList.add("header--draw")
        header.classList.remove("header--transparent")
    }

    }

}
