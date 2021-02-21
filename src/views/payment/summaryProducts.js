import {seon} from '../../../dataBase/data.js'

const cSummaryProducts = () =>{

    const cSummaryProducts = document.createElement('div')
    cSummaryProducts.classList.add('l-summary-products')

    //first select is Envio - cost is 7000
    seon.costShipping = 7000
    const productsValue = seon.totalValueCart()
    const totalValue = productsValue == 0  ? 0 : productsValue + seon.costShipping

    cSummaryProducts.innerHTML = `<section class="menu-desplegable" >

                                    <div class="menu-desplegable__header">

                                        <div class="menu-header">

                                            <div class="menu-header__container">

                                                <div class="carrito"><i class="fas fa-shopping-basket"></i></div>
                                                <div class="text">
                                                    <div id="summaryState" class="text__text">Mostrar resumen del pedido</div>
                                                    <div id="buttonSummary" class="text__arrow"><i class="fas fa-chevron-down"></i></div>
                                                </div> 

                                            </div>
                                            <p class="menu-header__total">$ ${totalValue}</p>

                                        </div>
                                        
                                    </div>
                                </section>

                                <section  class="menu-productos">

                                    <div id="visorProducts" class="main__productos c-scroll">

                                    </div>

                                    <div class="menu-productos__container">

                                        <div class="container__bottons">
                                            <input class="botton-descuento" type="text" placeholder="Cupón o código de descuento">
                                            <div class="c-button c-button--green">Usar</div>
                                        </div>

                                        <div class="container__description">
                                            <div class="subtotal ">
                                                <div class="text">Sub Total</div>
                                                <div class="value">$ ${totalValue}</div>
                                            </div>

                                            <div class="envio ">
                                                <div class="text">Envios</div>
                                                <div class="value">$ ${seon.costShipping}</div>
                                            </div>

                                            <div class="total">
                                                <div class="text">Total</div>
                                                <div class="value">cop <span>$ ${totalValue}</span></div>
                                            </div>
                                        </div>

                                    </div>
                                </section>`

    const lProducts = cSummaryProducts.querySelector('#visorProducts')

    const buttonDisplaySummaryProducts = cSummaryProducts.querySelector('#buttonSummary')
    const lSummaryProducts = cSummaryProducts.querySelector('.menu-productos')
    const summaryState = cSummaryProducts.querySelector('#summaryState')
    const headerSummary = cSummaryProducts.querySelector('.menu-header')

    headerSummary.style.cursor = 'pointer'
    headerSummary.addEventListener('click',showSummary)

    console.log(lSummaryProducts)

    seon.cart.forEach(product =>{
        console.log(product)
        lProducts.appendChild(cProductPayment(product))
    })        
    
    
    function showSummary(element){

        buttonDisplaySummaryProducts.classList.toggle("icon--translate");

        buttonDisplaySummaryProducts.classList.contains('icon--translate')
        ? summaryState.textContent = "Ocultar resumen del pedido"
        : summaryState.textContent = "Mostrar resumen del pedido"

        lSummaryProducts.classList.toggle("menu-productos--visibility")

    }

    return cSummaryProducts
}

export {cSummaryProducts}



const cProductPayment = (product) =>{

    const cProductPayment = document.createElement('div')
    cProductPayment.classList.add('producto')

    const productItem = seon.findProductById(product.id)

    cProductPayment.innerHTML = `<div class="producto__img">
                                <img src="${productItem.urlImg}" alt=""></div>

                                <div class="producto__description">
                                    <div class="name">${productItem.name}</div>
                                    <div class="description">set ${product.unitType} - ${product.colorType} <br> ${product.units} und.</div>
                                </div>

                                <div class="producto__total">$ ${product.total}</div>`

    return cProductPayment
}