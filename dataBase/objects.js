//constructor de objetos "product"
class Product{

    constructor (id,nombre,valor,valorAnterior,unidadesDisponibles=0,url,descripcion,unidades,colores,reseña,informacion){

        this.id = id
        this.name = nombre
        this.value = valor
        this.beforeValue = valorAnterior
        this.stock= unidadesDisponibles
        this.urlImg = url
        this.descriptions = descripcion
        this.units = unidades
        this.colors = colores
        this.feedback = reseña
        this.info = informacion
    }
 
}


//constructor de objetos "tienda"
class Tienda{

    constructor(productos=[]){
        this.products = productos; // [lista...]
        this.lastId = 1;
    }

    //añadir producto
    addProduct(nombre,valor,valorAnterior,stock=0){
        try{

            if(arguments.length < 2){
                throw new Error('product needs name and value')
            }

            let product = new Product(this.lastId,nombre,valor,valorAnterior,stock)
            this.products.push(product)
            this.lastId++

        }catch(err){
            console.log(err)
        }

    }

    //eliminar producto
    deleteProduct(id){
        let product = this.findProductById(id)

        this.products = this.products.filter(elemento=> elemento.id !== id)
    }


    /**
     * retorna el nuevo stock del producto
     * @param id -producto @param quantity cuanto se vendera del stock
     */
    sellProduct(id,quantity){
        try{
            let productToSell = this.findProductById(id)

            if(productToSell.stock - quantity >= 0 ){

                productToSell.stock -= quantity

                return productToSell.stock

            }else{
                throw new Error(`${productToSell.name} sin stock para esta venta`)
            }

        }catch(err){
            console.log(err)
            return -1
        }
    }

    /**
     * retorna el nuevo stock del producto
     * @param id -producto @param quantity cuanto ingresara del producto
     */
    supplyProduct(id,quantity){
        try{
            let productToInsert = this.findProductById(id)
            productToInsert.stock += quantity    
           
            return productToInsert.stock
        }catch(err){
            console.log(err)
            return -1
        }
    }

    /**
     * retorna el producto con el id indicado
     * @param id - producto
     */
    findProductById(id){
        let product = this.products.find(product => product.id == id)

        if(product !== undefined){
            return product
        }
        else{
            throw new Error(`no existe ningun producto con el id #${id} en el inventario`)
        }
    }

    listInventario(){
        this.products.forEach(product => console.log(product))
    }

}



export{Tienda}