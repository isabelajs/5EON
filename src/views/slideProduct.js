export default()=> {

    const shoppingCart = document.createElement("div")
    shoppingCart.setAttribute('id','shooping-cart')
    shoppingCart.classList.add("l-shooping-cart")

    const test = " "
    const producto = {nombre:"set portavasos chavita", id:'1'}

    const view = `      <div class="c-shooping__header">
                            <h3 class="c-shooping__title">Carrito de compra</h3>
                            <div id="shooping-cart__close" class="c-shooping__close c-button c-button--flat c-button--small"><i class="fas fa-times"></i></div>
                        </div>

                        <div class="l-shooping__products c-scroll">

                            <div class="c-product-cart">

                                <div class="c-product-cart__img">
                                    <img src="" alt="">
                                </div>

                                <div class="l-product-cart__information">
                                    <div class="c-txt-16">producto ${test}</div>
                                    <div class="c-txt-l-14">units and color${test}</div>

                                    <div class="c-increment">
                                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                                        <div class="c-increment__text">3</div>
                                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                                    </div>

                                    <div class="c-txt-l-16">${15000}</div>
                                </div>

                            </div>

                            <div class="c-product-cart">

                                <div class="c-product-cart__img">
                                    <img src="" alt="">
                                </div>

                                <div class="l-product-cart__information">
                                    <div class="c-txt-16">producto${test}</div>
                                    <div class="c-txt-l-14">units and color${test}</div>

                                    <div class="c-increment">
                                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                                        <div class="c-increment__text">3</div>
                                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                                    </div>

                                    <div class="c-txt-l-16"> 15000${test}</div>
                                </div>

                            </div>

                            <div class="c-product-cart">

                                <div class="c-product-cart__img">
                                    <img src="" alt="">
                                </div>

                                <div class="l-product-cart__information">
                                    <div class="c-txt-16">producto${test}</div>
                                    <div class="c-txt-l-14">units and color${test}</div>

                                    <div class="c-increment">
                                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                                        <div class="c-increment__text">3</div>
                                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                                    </div>

                                    <div class="c-txt-l-16"> 15000${test}</div>
                                </div>

                            </div>
                            
                            <div class="c-product-cart">

                                <div class="c-product-cart__img">
                                    <img src="" alt="">
                                </div>

                                <div class="l-product-cart__information">
                                    <div class="c-txt-16">producto${test}</div>
                                    <div class="c-txt-l-14">units and color${test}</div>

                                    <div class="c-increment">
                                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                                        <div class="c-increment__text">3</div>
                                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                                    </div>

                                    <div class="c-txt-l-16"> 15000${test}</div>
                                </div>

                            </div>
                            <div class="c-product-cart">

                                <div class="c-product-cart__img">
                                    <img src="" alt="">
                                </div>

                                <div class="l-product-cart__information">
                                    <div class="c-txt-16">producto${test}</div>
                                    <div class="c-txt-l-14">units and color${test}</div>

                                    <div class="c-increment">
                                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                                        <div class="c-increment__text">3</div>
                                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                                    </div>

                                    <div class="c-txt-l-16"> 15000${test}</div>
                                </div>

                            </div>
                        </div>
                        
                        <div class="l-shooping__sell">

                            <div class="c-container c-shooping__discount">
                                <div class="c-two-thirds">
                                    <p>descuento</p> 
                                </div>
                                <div class="c-one-third c-txt-right">
                                    <p>${0}</p> 
                                </div>
                            </div>

                            <div class="c-container c-shooping__value">
                                <div class="c-two-thirds">
                                    <p>Total</p> 
                                </div>
                                <div class="c-one-third c-txt-right">
                                    <p>${52000}</p> 
                                </div>
                            </div>

                            <div class="c-shooping__text-condition c-txt-l-16">
                                Los códigos de descuento, los costes de envío y los impuestos se añaden durante el pago.
                            </div>

                            <div class="c-shooping__acept-condition c-checkbox-option">
                                <input type="checkbox" id="shopping-condition">
                                <label for="shopping-condition"> Acepto los terminos y condiciones</label>
                            </div>

                            <div class="c-button c-button--green">Finalizar pedido</div>


                        </div>`

    shoppingCart.innerHTML = view

    return shoppingCart
}