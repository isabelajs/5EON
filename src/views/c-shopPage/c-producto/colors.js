import {seon} from '../../../../dataBase/data.js'

export default (id)=> {

    const productItem = seon.findProductById(id)
  
    //crea el componente colores
    let productColors = document.createElement('div')
    productColors.classList.add("l-product__colors")
 
    const cuerpo = `<div class="c-txt-16">Color:</div>
                    <div class="l-product__colors-items"></div>`
    productColors.innerHTML = cuerpo

    //captura el número de colores disponibles
    var colores = productItem.colors
    //agrega cada color con su funcionalidad
    colores.forEach(color => {
        let unitColor = document.createElement("div");
        unitColor.className = 'c-color';
        unitColor.setAttribute('id',color.nombre)
        unitColor.style.background = color.codigo;
    
        productColors.querySelector(".l-product__colors-items").appendChild(unitColor)

        unitColor.addEventListener("click", ()=> productColors.querySelector('.c-txt-16').textContent = `Color: ${color.nombre}`)
    });

    return productColors

}