import {seon} from '../../../../dataBase/data.js'

export default()=>{
    //los obtengo para obtener algunas propiedades de visualización
    let product = seon.producToSell
    let productItem = seon.findProductById(product.id)
    let productName = productItem.name

    //creo el componente div
    let productCart = document.createElement("div");
    productCart.setAttribute('data-id',product.id)
    productCart.setAttribute('data-colorType', product.colorType)
    productCart.setAttribute('data-unitType', product.unitType)
    productCart.classList.add("c-product-cart")
   
    let unidades = product.unitType
    let price = productItem.values.find(unit => unit.unitType == unidades).price
    
    const view = `
        <div class="c-product-cart__img">
            <img src="${productItem.urlImg}" alt="">
        </div>

        <div class="l-product-cart__information">
            <div class="c-txt-16">${productName}</div>
            <div class="c-txt-l-14">set ${product.unitType} - ${product.colorType}</div>

            <div class="c-increment">
                <div id="plusQuantity" class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                <div class="c-increment__text">${product.units}</div>
                <div id="lessQuantity" class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
            </div>

            <div class="c-txt-l-16 totalProduct" >$ ${price*product.units}</div>
        </div>`


    productCart.innerHTML += view

    let plus = productCart.querySelector("#plusQuantity")
    let less =productCart.querySelector("#lessQuantity") 
    let numberText = productCart.querySelector(".c-increment__text")
    let valuTotal = productCart.querySelector(".c-txt-l-16")
    let total = null
  
    plus.addEventListener('click',plusValue)
    less.addEventListener("click",lessValue)

                
    function plusValue(){
        let Cproducto = this.parentNode.parentNode.parentNode 
        let productMath = seon.cart.find(element => element.id == Cproducto.dataset.id &&element.colorType == Cproducto.dataset.colortype && element.unitType == Cproducto.dataset.unittype)
    
        numberText.textContent = parseInt(numberText.textContent)+1 
        valuTotal.textContent = `$ ${price * parseInt(numberText.textContent)}`
        productMath.units += 1
            
    }


    function lessValue(){
        let Cproducto = this.parentNode.parentNode.parentNode 
        let productMath = seon.cart.find(element => element.id == Cproducto.dataset.id &&element.colorType == Cproducto.dataset.colortype && element.unitType == Cproducto.dataset.unittype)
        if(numberText.textContent>0){
            numberText.textContent = parseInt(numberText.textContent)-1
            valuTotal.textContent = price * parseInt(numberText.textContent)
            productMath.units -=1
           
        }
        if (numberText.textContent == 0){
            
            seon.cart.splice(seon.cart.indexOf(productMath),1)  
            productCart.remove()

            
            
        }
    }


    return productCart
}







