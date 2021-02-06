export default () => {

    const view = `<div class="header__logo"></div>
                    <div class="c-icon c-icon--big" id="icon"><i  class="fas fa-bars" ></i></div>        
                    <nav class="header__menu">
                        <ul class="menu-container">
                            <li ><a href="#/intro">Home</a></li>
                            <li ><a href="#/aboutUs">About Us</a></li>
                            <li ><a href="#/proceso">Proceso</a></li>
                            <li ><a href="#/productos">Productos</a></li>
                        </ul>
                    </nav>`

    const header = document.createElement('header')
    header.setAttribute('id','header')
    header.classList.add('header')
    header.innerHTML = view;

    let icon = header.querySelector('#icon')

    icon.addEventListener('click',desplegable)

    window.onscroll = modifyHeader
    window.onresize = modifyHeader

    return header
}


function modifyHeader(){

    const width = document.documentElement.clientWidth
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

function desplegable(){
    let menu = this.nextSibling.nextSibling
        menu.classList.toggle("menu--visibility")
    let icono = this.children[0]
        icono.classList.toggle("fa-bars")
        icono.classList.toggle("fa-times")

}
