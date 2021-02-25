import {seon} from '../../../dataBase/data.js'
import {cFooterPayment} from '../payment/footer.js'
import {cModalInfo} from '../info.js'


const cFormPayment = () =>{

    window.document.body.appendChild(cFooterPayment())

    //on error colocar un label debajo indicado el error

    const cFormPayment = document.createElement('div')
    cFormPayment.classList.add('l-payment')
    cFormPayment.innerHTML = `<form id="paymentForm"  action="" class="c-form">
                                
                                        <div class="l-form-section l-payment__contacto">
                                
                                            <div class="c-form-section__title">Informacion de contacto</div>
                                
                                            <div class="l-form-section__inputs">
                                            
                                                <label class="c-form-input" for="userName">
                                                    Nombre<input type="text" id="userName" >
                                                </label>
                                
                                                <label class="c-form-input" for="userId">
                                                    N° indentificacion<input type="text" id="userId"  inputmode='numeric' >
                                                </label>
                                                    
                                                <label class="c-form-input" for="userEmail">
                                                    Correo electronico<input type="email" id="userEmail" >
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
                                                    Departamento<input type="text" id="userState" >
                                                </label>

                                                <label class="c-form-input" for="userCity" >
                                                    Ciudad<input type="text"  id="userCity" >
                                                </label>

                                                <label class="c-form-input" for="userAddress">
                                                    Direccion<input type="text"  id="userAddress" >
                                                </label>
                                                    

                                            </div>
                                            
                                        </div>
                                        
                                        <div class="l-form-section l-payment__pago">
                                
                                            <div class="c-form-section__title">Medio de pago</div>
                                
                                
                                            <div class="l-form-section__inputs">
                                            
                                                <label class="c-form-input" for="cardUserName">
                                                    Nombre<input type="text" id="cardUserName" >
                                                </label>
                                
                                                <label class="c-form-input c-form-input--icon" for="cardNumber">
                                                    Numero de tarjeta
                                                    <i class="fas fa-credit-card"></i> 
                                                    <input type="text" id="cardNumber" >
                                                </label> 
                                
                                            </div>
                                
                                            <div class="l-form-section__inputs l-form-section__inputs--inline">
                                            
                                                <label class="c-form-input" for="cardExpireMonth">
                                                    <p class="c-form-input__title">Fecha de expiración</p>
                                
                                                    <!-- si necesito mas de un input por label-->
                                                    <div class="l-form-input__items">
                                                        <input type="text" id="cardExpireMonth" placeholder="MM" >
                                                        <input type="text" id="cardExpireYear" placeholder="YY" >
                                                    </div>
                                
                                                </label>
                                                
                                                <label class="c-form-input" for="cardVerificationCode">
                                                    <p class="c-form-input__title">CVV</p>
                                                    <input type="text" id="cardVerificationCode" placeholder="000" >
                                                </label>
                                                
                                            </div>
                                        </div>

                                        <div class="l-payment__accept">
                                    
                                            <div class="c-checkbox-option">
                                                <input type="checkbox" id="shopping-condition">
                                                <label for="shopping-condition"> Guardar mi informacion para próximos pagos</label>
                                            </div>

                                            <input id="buttonPayment" type="submit" class="c-payment__finalize c-button c-button--green" value="Finalizar compra">
                                            
                                        </div>

                                    </form>
                                
                                    <div id="buttonHome" class="c-payment__get-back c-button c-button--flat">Volver</div>` 


    const shippingHome = cFormPayment.querySelector('#shippingHome')
    const shippingStore = cFormPayment.querySelector('#shippingStore')


  
    //terminar pago
    cFormPayment.querySelector('#paymentForm').addEventListener("submit",(evt)=>{
        evt.preventDefault();
        
        Array.from(cFormPayment.querySelectorAll('.c-form-inputError')).forEach(element=> element.remove())

        const userName = cFormPayment.querySelector('#userName')
        const userId = cFormPayment.querySelector('#userId')
        const userEmail = cFormPayment.querySelector('#userEmail')
        
        const userState = cFormPayment.querySelector('#userState')
        const userCity = cFormPayment.querySelector('#userCity')
        const userAddress = cFormPayment.querySelector('#userAddress')


        //validate first section form
        if(userName.value.length <= 5 && !isOnlyString(userName.value)){
            userName.insertAdjacentHTML('afterend','<div class="c-form-inputError"> Nombre incorrecto [a-zA-Z] {5-45} </div>')
        }
        if(!isNumber(userId.value) || userId.length < 5){
            userId.insertAdjacentHTML('afterend','<div class="c-form-inputError"> Numero de identificacion incorrecto [0-9] {5-45} </div>')
        }
        if(!isEmail(userEmail.value)){
            userEmail.insertAdjacentHTML('afterend','<div class="c-form-inputError"> Direccion de correcto incorrecta example@gmail.com </div>')
        }

        //validate second section form
        if(userState.value.length <= 5 || !isOnlyString(userState.value)){
            userState.insertAdjacentHTML('afterend','<div class="c-form-inputError"> Nombre de Departamento incorrecto [a-zA-Z] {5-45}  </div>')
        }
        if(userCity.value.length <= 5 || !isOnlyString(userCity.value)){
            userCity.insertAdjacentHTML('afterend','<div class="c-form-inputError"> Nombre de Ciudad incorrecto [a-zA-Z] {5-45}  </div>')
        }
        if(userAddress.value.length <= 10){
            userAddress.insertAdjacentHTML('afterend','<div class="c-form-inputError"> Direccion de residencia incorrecta [a-zA-Z0-9] </div>')
        }

        

        const cardUserName = cFormPayment.querySelector('#cardUserName')
        const cardNumber = cFormPayment.querySelector('#cardNumber')
        const validationNumberCard = cardValidation(cardNumber.value)
        const cardExpireMonth = cFormPayment.querySelector('#cardExpireMonth')
        const cardExpireYear = cFormPayment.querySelector('#cardExpireYear')
        const cardVerificationCode = cFormPayment.querySelector('#cardVerificationCode')


        //validation payment card
        if(cardUserName.value.length <= 5 && !isOnlyString(cardUserName.value)){
            cardUserName.insertAdjacentHTML('afterend','<div class="c-form-inputError"> Nombre incorrecto [a-zA-Z] {5-45} </div>')
            return
        }
        if(validationNumberCard.err){
            document.body.appendChild(cModalInfo(validationNumberCard.err,'error'))
            return
        }
        if(!isNumber(cardExpireMonth.value) || cardExpireMonth.value.length<2 || !isNumber(cardExpireYear.value) || cardExpireYear.value.length<2){
            document.body.appendChild(cModalInfo('Fecha de expiracion incorrecta!','error'))
            return
        }
        if(!isNumber(cardVerificationCode.value) || cardVerificationCode.value){
            document.body.appendChild(cModalInfo('Codigo de verificacion Incorrecto!'),'error')
            return
        }





    
    })

    cFormPayment.querySelector("#buttonHome").onclick = ()=>{ window.location.hash = ''}
    
    //change of shipping cost
    shippingHome.onclick = ()=> {
        seon.costShipping = 7000
        document.querySelector('#costShipping').textContent = `$ ${seon.costShipping}` 
        document.querySelector('#totalPayment').textContent = seon.totalToPay() 
    }

    shippingStore.onclick = () =>{
        seon.costShipping = 0
        document.querySelector('#costShipping').textContent = `$ ${seon.costShipping}` 
        document.querySelector('#totalPayment').textContent = seon.totalToPay() 
    }

    return cFormPayment
}

export {cFormPayment}


//input string -> '5123951989745802' return {valor:70: validation:true}
function cardValidation(numeros) {
    
    let numberCard = numeros
    var suma = 0;

    if(numberCard == undefined || numberCard.length !== 16 || isNaN(numeros)){
        return {valor:suma, validation:false, err:'Numero de tarjeta incorrecto'}
    }

   for(let i = 0; i<numberCard.length; i += 2){

       let number = numberCard[i]*2;

       number >= 10 
       ? suma += ((number%10) + 1)
       : suma+= number

       i+1 < numberCard.length
       ? suma+= parseInt(numberCard[i+1])
       : suma;

   }

   //los retornos no se pueden colocar en condicionales ternarias a menos que aplique cosas raras
   if(suma%10 == 0){
       return {valor:suma, validation:true, err:null}
   }else{
       return {valor:suma, validation:false, err:'Numero de tarjeta incorrecto'}
   }
}



function isNumber(string,min=1,max=45){
    // let reg = new RegExp(`^[0-9]{}$`);
    let reg = new RegExp(`^[0-9]+$`);

    return reg.test(string)
}


function isEmail(string){

    // if(!string.includes('@') || string.indexOf('@') < 5 || string.includes(' ') || (string.length - string.indexOf('@') < 8) ){
    //     return false
    // }

    // return true

    var mailformat = /\S+@\S+\.\S+/;

    if(string.match(mailformat)){
        return true
    }
    else{
        return false
    }

}

function isOnlyString(string){
    let reg = /^[A-Za-z]+$/;  //parece ser que un string con / aca iria / es un regex
    
    return reg.test(string)
}


isOnlyString('')
// let cardNumber = ''

  //if i want to simulate password without last four numbers

    //bug con el keydown no toma la ultima letra de la accion
    // cardNumberText.addEventListener('keyup',(evt)=>{

    //     if(evt.key == 'Escape' || evt.key== 'Enter' || evt.key == 'Tab' || evt.key == 'Backspace'){
    //         return
    //     }

    //     cardNumber += evt.key 


    //     cardNumber.length <= 12 ? cardNumberText.value = '*'.repeat(cardNumber.length) : ''

    // })

    // //only delete character of cardnumber when key is down
    // cardNumberText.addEventListener('keydown',(evt)=>{
        
    //     if(evt.key == 'Backspace'){
    //         cardNumber = cardNumber.slice(0,-1)
    //     }
    
    // })





    var numbers = '[0-9]'
    console.log('asd123'.match(numbers))