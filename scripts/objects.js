//constructor de objetos "product"
class Product{

    constructor (id,nombre,valor,unidadesDisponibles=0){
        this.id = id
        this.name = nombre
        this.value = valor
        this.stock= unidadesDisponibles
    }

}

//constructor de objetos "tienda"
class Tienda{

    constructor(productos=[],){
        this.products = productos;
        this.lastId = 1;
    }

    //añadir producto
    addProduct(nombre,valor,stock=0){
        try{
            if(arguments.length < 2){
                throw new Error('product needs name and value')
            }

            let product = new Product(this.lastId,nombre,valor,stock)
            this.products.push(product)
            this.lastId++

        }catch(err){
            console.log(err)
        }

    }

    //eliminar producto
    deleteProduct(id){
        let product = this.findProductById(id)

        this.products = this.products.filter(product=>{
            return product !== id
        })
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


let seon = new Tienda()

seon.addProduct("recipiezas-blancas",1500,10)
seon.addProduct("recipiezas-rojas",1500,99)

var pepe = seon.sellProduct(3,5)

seon.listInventario()


//esconder los digitos ..... 