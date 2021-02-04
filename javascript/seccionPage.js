let arrow = document.getElementById("arrow");

arrow.addEventListener("click", ()=>{desplegarMenu(arrow)});

function desplegarMenu(element){
    let text = arrow.previousSibling.previousSibling;
    element.classList.toggle("icon--translate");

    element.classList.contains('icon--translate')
    ? text.textContent = "Ocultar resumen del pedido"
    : text.textContent = "Mostrar resumen del pedido"

    let menuProductos  = document.querySelector(".menu-productos")
    menuProductos.classList.toggle("menu-productos--visibility")

}