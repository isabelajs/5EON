export default() =>{

    const cProducto =document.createElement("div")
    cProducto.classList.add('c-product')
    
    const test = " "
    const producto = {nombre:"set portavasos chavita", id:'1'}

    const view = `
    <div class="l-product__header">
        
        <h2 class="c-product__title">${producto.nombre}</h2>
        <div class="c-product__id">codigo: 000${producto.id}</div>

        <div class="c-product__feedback">
            <div class="c-feedback__txt">feedback${test}<span class="c-txt-l-14">(3)</span> </div>
            <div class="c-feedback__qualification-img"></div>
        </div>
    </div>

    <div class="l-product__representation">
        <div class="c-product__img">
            <div>
                <img src="../assets/producto_1.png" alt="producto xxx${test}" width="520" height="520">
                <div class="c-product__price">
                    <h3>13k${test}</h3>
                    <p>15k${test}</p>
                </div>
            </div>


        </div>
    </div>

    <div class="l-product__information">

        <div class="l-product__descriptions">
            <div class="c-description-item c-description-item--right">250 <br> Gramos</div>
            <div class="c-description-item c-description-item--right">+3 <br>  Semillas</div>
            <div class="c-description-item">+3 <br> colores</div>
        </div>

        <div class="l-product__units">
            <div class="c-button c-button--small c-button--flat">4 Und.</div>
            <div class="c-button c-button--small c-button--flat">6 Und.</div>
            <div class="c-button c-button--small c-button--flat">12 Und.</div>
        </div>

        <div class="l-product__colors">
            <div class="c-txt-16">color:blue${test}</div>

            <div class="l-product__colors-items">
                <div class="c-color c-color--blue"></div>
                <div class="c-color c-color--gold"></div>
                <div class="c-color c-color--red"></div>
            </div>
        </div>

        <div class="l-product__quantity-total">

            <div class="l-product__quantity-increment">
                <div class="c-txt-16">cantidad</div>
                <div class="c-increment">
                    <div class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                    <div class="c-increment__text">3</div>
                    <div class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                </div>

        
            </div>
            

            <div class="l-product__value-total">
                <div class="c-txt-16">valor</div>
                <div class="c-button c-button--flat">$ 13000</div>
            </div>
        </div>

        <div id="product__button" class="c-button c-button--green">Agregar al carrito</div>

    </div>`

    cProducto.innerHTML = view

 
    return cProducto
}


