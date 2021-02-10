import {seon} from '../../../dataBase/data.js'

export default(id) =>{

    const cProducto = document.createElement("div")
    cProducto.classList.add('c-product')
    
    const productItem = seon.findProductById(id)


    //si el producto no esta creado completamente... 'el producto no esta disponible -'
    console.log(productItem);



    
    const test = ""
    const producto = {nombre:"set portavasos chavita", id:'1'}
    
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
                    <h3>$${productItem.value}</h3>
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
                <div id="totalValue" class="c-button c-button--flat">$ ${productItem.value}</div>
            </div>
        </div>

        <div id="product__button" class="c-button c-button--green">Agregar al carrito</div>

    </div>`

    cProducto.innerHTML = view



    //componente general, información del producto
    let contentInfo = cProducto.querySelector(".l-product__information")


    //crea y agrega el componente descipción del producto
    const descriptionProduct = document.createElement('div')
    descriptionProduct.classList.add('l-product__descriptions')
    contentInfo.prepend(descriptionProduct)
    



    //obtengo las descripciones y su tamaño
    const descriptions = productItem.descriptions
    const descriptionsLenght = descriptions.length

    for (let i = 0; i < descriptionsLenght; i ++ ){
        if (i<descriptionsLenght-1){
        descriptionProduct.innerHTML +=  `<div class="c-description-item c-description-item--right">${descriptions[i]}</div>`
        } else{
            descriptionProduct.innerHTML += `<div class="c-description-item">${descriptions[i]}</div>`
        }
    }
    

    
    let descripcion = cProducto.querySelector('.l-product__descriptions') 
    
    let cantidadUnidades = productItem.units.length


    //crea el componente unidades de producto
    let unidades = document.createElement("div")
    unidades.classList.add("l-product__units")


    //evalua si se vende en un solo set o si tiene diferentes cantidades, segun agrega el componente unidades
    if (cantidadUnidades>1){
        for(let i = 0; i<cantidadUnidades; i++){
            let buttonUnit = document.createElement('div')
            buttonUnit.className = 'c-button c-button--small c-button--flat'
                        
            buttonUnit.textContent = `${productItem.units[i]} Piezas.`
            unidades.appendChild(buttonUnit)  
        }
    } else {
        let buttonUnit = document.createElement('div')
        buttonUnit.className = 'c-button c-button--small c-button--flat'                 
        buttonUnit.textContent = `${productItem.units[0]}`
        unidades.appendChild(buttonUnit)
    }
        console.log(descripcion);
        
        // let descripcion = cProducto.querySelector('.l-product__descriptions') 
        descripcion.insertAdjacentElement('afterend',unidades)       
    

    //captura el número de colores disponibles
    var colores = productItem.colors
    
    let productColors = document.createElement('div')
    productColors.classList.add("l-product__colors")

    const cuerpo = `<div class="c-txt-16">Color:</div>
                    <div class="l-product__colors-items"></div>`
    productColors.innerHTML = cuerpo
    //agrega cada color con su funcionalidad
    colores.forEach(color => {
        let unitColor = document.createElement("div");
        unitColor.className = 'c-color';
        unitColor.setAttribute('id',color.nombre)
        unitColor.style.background = color.codigo;
     
        productColors.querySelector(".l-product__colors-items").appendChild(unitColor)

        unitColor.addEventListener("click", ()=> productColors.querySelector('.c-txt-16').textContent = `Color: ${color.nombre}`)
    });

    let productUnits = cProducto.querySelector('.l-product__units') 
        productUnits.insertAdjacentElement('afterend',productColors)  
    
    //asigna funcionalidad a los botones de sumar o disminuir cantidad
    let moreQuantity = cProducto.querySelector('#plus')
    let lessQuantity = cProducto.querySelector('#minus')
    let quantityText = cProducto.querySelector('.c-increment__text')

    let totalValueComponent = cProducto.querySelector("#totalValue")
    
    moreQuantity.addEventListener('click', ()=>{
        let quantityNumber = parseInt(quantityText.textContent)

        if(quantityNumber < productItem.stock){
            quantityText.textContent = quantityNumber + 1 
            let newTotal = (quantityNumber + 1) * productItem.value
            totalValueComponent.textContent = `$ ${newTotal}`
        }

    } );

    lessQuantity.addEventListener('click', ()=>{ 

        let quantityNumber = parseInt(quantityText.textContent)
        if(quantityNumber > 1){
            
            quantityText.textContent = quantityNumber - 1
            let newTotal = (quantityNumber - 1) * productItem.value
            totalValueComponent.textContent = `$ ${newTotal}`
            
        }


      }
     );
    
   

    

    return cProducto
}





