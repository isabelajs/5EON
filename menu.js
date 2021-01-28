let icon = document.getElementById("icon");
icon.addEventListener("click", ()=>{desplegable(icon)});

function desplegable(icon){
    let menu = icon.nextSibling.nextSibling
        menu.classList.toggle("visibility")
    let icono =icon.children[0]
        icono.classList.toggle("fa-bars")
        icono.classList.toggle("fa-times")

}

