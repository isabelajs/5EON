import {seon} from '../../../dataBase/data.js'


const cFormPayment = () =>{

    const cFormPayment = document.createElement('div')
    cFormPayment.classList.add('l-payment')
    cFormPayment.innerHTML = `<form name="payment-form" action="" class="c-form">
                                
                                        <div class="l-form-section l-payment__contacto">
                                
                                            <div class="c-form-section__title">Informacion de contacto</div>
                                
                                            <div class="l-form-section__inputs">
                                            
                                                <label class="c-form-input" for="userName">
                                                    Nombre<input type="text" id="userName">
                                                </label>
                                
                                                <label class="c-form-input" for="userId">
                                                    N° indentificacion<input type="text" id="userId">
                                                </label>
                                                    
                                                <label class="c-form-input" for="userEmail">
                                                    Correo electronico<input type="text" id="userEmail">
                                                </label>
                                            </div>
                                            
                                        </div>
                                
                                        <div class="l-form-section l-payment__entrega">
                                
                                            <div class="c-form-section__title">forma de entrega</div>
                                
                                            <div class="l-form-section__inputs l-form-section__inputs--options">
                                
                                                <div class="c-form-option c-radio-option">
                                                    <input name="shippingOption" type="radio" class="c-checkbox" id="shippingHome" checked>
                                                    <label for="shippingHome"> Envío </label>
                                                </div>
                                
                                                <div class="c-form-option c-radio-option">
                                                    <input name="shippingOption" type="radio" class="c-checkbox" id="shippingStore">
                                                    <label for="shippingStore"> Retiro en tienda</label>
                                                </div>
                                
                                            </div>
                                
                                        </div>
                                
                                        <div class="l-form-section l-payment__envio">
                                
                                            <div class="c-form-section__title">informacion de envío</div>
                                
                                            <div class="l-form-section__inputs">
                                
                                                <label class="c-form-input" for="userState">
                                                    Departamento<input type="text"  id="userState">
                                                </label>

                                                <label class="c-form-input" for="userCity">
                                                    Ciudad<input type="text"  id="userCity">
                                                </label>

                                                <label class="c-form-input" for="userAddress">
                                                    Direccion<input type="text"  id="userAddress">
                                                </label>
                                                    

                                            </div>
                                            
                                        </div>
                                        
                                        <div class="l-form-section l-payment__pago">
                                
                                            <div class="c-form-section__title">Medio de pago</div>
                                
                                
                                            <div class="l-form-section__inputs">
                                            
                                                <label class="c-form-input" for="cardUserName>
                                                    Nombre<input type="text" id="cardUserName">
                                                </label>
                                
                                                <label class="c-form-input c-form-input--icon" for="cardNumber">
                                                    Numero de tarjeta
                                                    <i class="fas fa-credit-card"></i> <input type="text"  id="numberCard">
                                                </label> 
                                
                                            </div>
                                
                                            <div class="l-form-section__inputs l-form-section__inputs--inline">
                                            
                                                <label class="c-form-input" for="cardExpireMonth">
                                                    <p class="c-form-input__title">Fecha de expiración</p>
                                
                                                    <!-- si necesito mas de un input por label-->
                                                    <div class="l-form-input__items">
                                                        <input type="text" id="cardExpireMonth" placeholder="MM">
                                                        <input type="text" id="cardExpireYear" placeholder="YY">
                                                    </div>
                                
                                                </label>
                                                
                                                <label class="c-form-input" for="cardVerificationCode">
                                                    <p class="c-form-input__title">CVV</p>
                                                    <input type="text" id="cardVerificationCode" placeholder="000">
                                                </label>
                                                
                                            </div>
                                        </div>
                                
                                    </form>
                                
                                    <div class="l-payment__accept">
                                
                                        <div class="c-checkbox-option">
                                            <input type="checkbox" id="shopping-condition">
                                            <label for="shopping-condition"> Guardar mi informacion para próximos pagos</label>
                                        </div>
                                
                                        <div class="c-payment__finalize c-button c-button--green">Finalizar compra</div>
                                        
                                    </div>
                                
                                    <div class="c-payment__get-back c-button c-button--flat">Volver</div>` 

    return cFormPayment
}

export {cFormPayment}
