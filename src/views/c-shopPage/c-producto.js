import {seon} from '../../../dataBase/data.js'
import productDescription from './c-producto/descriptions.js'
import productUnits from "./c-producto/units.js"
import productColors from "./c-producto/colors.js"


const componentProduct = (id) =>{

    seon.producToSell.id = id

    const cProducto = document.createElement("div")
    cProducto.classList.add('c-product')
    
    const productItem = seon.findProductById(id)


    //si el producto no esta creado completamente... 'el producto no esta disponible -'

    const view = `
    <div class="l-product__header">
        
        <h2 class="c-product__title">${productItem.name}</h2>
        <div class="c-product__id">codigo: 000${productItem.id}</div>

        <div class="c-product__feedback">
            <div class="c-feedback__txt">feedback<span class="c-txt-l-14">(${productItem.feedback})</span> </div>
            <div class="c-feedback__qualification-img"></div>
        </div>
    </div>

    <div class="l-product__representation">
        <div class="c-product__img">
            <div>
                <img src="${productItem.urlImg}" alt="producto xxx${productItem.name}" width="520" height="520">
                <div class="c-product__price">
                    <h3>$${productItem.values[0].price}</h3>
                    <p>$${productItem.beforeValue}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="l-product__information">

        <div class="l-product__quantity-total">

            <div class="l-product__quantity-increment">
                <div class="c-txt-16">Unidades</div>
                <div class="c-increment">
                    <div id = "plus" class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                    <div class="c-increment__text">1</div>
                    <div id = "minus" class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                </div>
            </div>
            

            <div class="l-product__value-total">
                <div class="c-txt-16">Total</div>
                <div id="totalValue" class="c-button c-button--flat">$ ${productItem.values[0].price}</div>
            </div>
        </div>

        <div id="product__button" class="c-button c-button--green">Agregar al carrito</div>

    </div>`

    cProducto.innerHTML = view


    //capto el componente general, información del producto
    let contentInfo = cProducto.querySelector(".l-product__information")
    //agrega el componente descriptionProduct
    contentInfo.prepend(productDescription(id))
    //capto el componente descriptions 
    let productDescripcion = cProducto.querySelector('.l-product__descriptions') 
    //agrega el componente unidades
    productDescripcion.insertAdjacentElement('afterend',productUnits(id)) 
    //captura el componente unidades
    let productUnit = cProducto.querySelector('.l-product__units') 
    //agrega el componente colores
    productUnit.insertAdjacentElement('afterend',productColors(id))  
    
    //asigna funcionalidad a los botones de sumar o disminuir cantidad
    let moreQuantity = cProducto.querySelector('#plus')
    let lessQuantity = cProducto.querySelector('#minus')
    let quantityText = cProducto.querySelector('.c-increment__text')


    //asigno el primer valor para units como 1
    seon.producToSell.units = parseInt(quantityText.textContent)
    seon.producToSell.price = productItem.values[0].price


    console.log(seon.producToSell)
    moreQuantity.addEventListener("click", ()=>{
        let quantityNumber = parseInt(quantityText.textContent)
        quantityText.textContent = quantityNumber +1
        seon.producToSell.units = quantityNumber + 1

        modifyTotal()

    })

    lessQuantity.addEventListener("click", ()=>{
        let quantityNumber = parseInt(quantityText.textContent)
        if(quantityText.textContent > 1){
            quantityText.textContent = quantityNumber -1;
            seon.producToSell.units = quantityNumber - 1
        }
        
        modifyTotal()
    })
  
    return cProducto
}

function modifyTotal(){

    let productItem = seon.findProductById(seon.producToSell.id)

    let unitSelected = seon.producToSell.unitType
    let colorSelected = seon.producToSell.colorType


    let stockAvaliable = productItem.stocks[colorSelected]
    let priceSelected = productItem.values.find(unit => unit.unitType == unitSelected).price

    let totalValueText = document.querySelector('#totalValue')

    totalValueText.textContent = `$ ${priceSelected * seon.producToSell.units}`
    seon.producToSell.price = priceSelected

    console.log(seon.producToSell)

}



export {componentProduct,modifyTotal}