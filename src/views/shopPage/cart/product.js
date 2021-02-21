import {seon} from '../../../../dataBase/data.js'
import { totalValueCart } from './controllerCart.js'

//Componente "product" --> en el carrito {id,colorType,unitType,units,price,total}
const componentProduct = (product)=>{

    // necesiario para renderizar 
    const productItem = seon.findProductById(product.id)
    const productName = productItem.name

    //componente producto Cart
    const productCart = document.createElement("div");
    productCart.setAttribute('data-id',product.id)
    productCart.setAttribute('data-colorType', product.colorType)
    productCart.setAttribute('data-unitType', product.unitType)
    productCart.classList.add("c-product-cart")

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

            <div class="c-txt-l-16 totalProduct" >$ ${product.total}</div>
        </div>`

    productCart.innerHTML += view

    let plus = productCart.querySelector("#plusQuantity")
    let less =productCart.querySelector("#lessQuantity") 
    let numberText = productCart.querySelector(".c-increment__text")
    let valueTotalText = productCart.querySelector(".c-txt-l-16")

    plus.addEventListener('click',plusValue)
    less.addEventListener("click",lessValue)

    //plus Quantity of product in seon.cart           
    function plusValue(){

        if(productItem.stocks[product.colorType].quantity < product.units+1){
            alert("El producto no contiene el suficiente inventario, intenta con otro color")
        }else{
            product.units += 1
            product.total = product.price * product.units

            numberText.textContent = product.units
            valueTotalText.textContent = `$ ${product.total}`
            totalValueCart()
        }
 
    }

    //rest quantity of product in seon.cart
    function lessValue(){
        if(product.units>0){
            product.units -=1
            
            if(product.units == 0 ){
                seon.cart.splice(seon.cart.indexOf(product),1)
                productCart.remove()
            }
            
            product.total = product.price * product.units
            numberText.textContent = product.units
            valueTotalText.textContent = `$ ${product.total}`  
        }

        totalValueCart()
        
    }


    return productCart
}

export{componentProduct}