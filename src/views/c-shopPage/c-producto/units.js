import {seon} from '../../../../dataBase/data.js'

export default (id)=> {

    const productItem = seon.findProductById(id)

     //crea el componente unidades de producto
     let productUnits = document.createElement("div")
     productUnits.classList.add("l-product__units")

     //obtiene el número de elementos 
     let cantidadUnidades = productItem.units.length

     //evalua si se vende en un solo set o si tiene diferentes cantidades, segun agrega el componente unidades
    if (cantidadUnidades>1){
        for(let i = 0; i<cantidadUnidades; i++){
            let cUnit = document.createElement('div')
            cUnit.className = 'c-button c-button--small c-button--flat'
                        
            cUnit.textContent = `${productItem.units[i]} Piezas.`
            productUnits.appendChild(cUnit)  
        }
    } else {
        let cUnit = document.createElement('div')
        cUnit.className = 'c-button c-button--small c-button--flat'                 
        cUnit.textContent = `${productItem.units[0]}`
        productUnits.appendChild(cUnit)
    }
        
    return productUnits 
 
}