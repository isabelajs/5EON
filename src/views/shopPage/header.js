const componentHeader = () => {

    const view =    `<div class="header__logo"></div>   
                    <nav id="menuHeader" class="header__menu">
                        <ul class="menu-container">
                            <li class='c-icon c-icon--big' id="headerHomeButton">
                                <i id="menuIcon" class="fas fa-home"></i>
                                <span>Home</span>
                            </li>
                            <li class='c-icon c-icon--big' id="headerCartButton">
                                <i class="fas fa-shopping-cart"></i>
                                <span>Cart</span>
                            </li>
                        </ul>
                    </nav>`

    const header = document.createElement('header')
    header.setAttribute('id','header')
    header.classList.add('header','header--shop')
    header.innerHTML = view;

    return header
}

export {componentHeader}