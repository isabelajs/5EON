//constructor de objetos "product"
class Product{

    constructor (id,nombre,valor,valorAnterior,unidadesDisponibles=0,url,descripcion,unidades,colores,numReseñas,informacion){

        this.id = id
        this.name = nombre
        this.value = valor
        this.beforeValue = valorAnterior
        this.stock= unidadesDisponibles
        this.urlImg = url
        this.descriptions = descripcion
        this.units = unidades
        this.colors = colores
        this.feedback = numReseñas
        this.info = informacion
        this.atributtes = []

    }
 
}

//constructor de objetos "tienda"
class Tienda{

    constructor(productos=[]){
        this.products = productos; // [lista...]
        this.lastId = 1;
    }

    //añadir producto
    addProduct(nombre,valor,valorAnterior,stock=0,url,descripcion,unidades,colores,reseña,informacion){
        try{

            if(arguments.length < 2){
                throw new Error('product needs name and value')
            }

            let product = new Product(this.lastId,nombre,valor,valorAnterior,stock,url,descripcion,unidades,colores,reseña,informacion)
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

            //saber si el producto esta disponible......  //url, 1 descripcion,, 1 tipo de unidad, 1 tipo de color
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


class Product2{
    
    constructor (id,nombre,urls,descripcion,numReseñas,informacion){
        this.id = id
        this.name = nombre
        this.Imgs = urls
        this.descriptions = descripcion
        this.info = informacion
        this.feedback = numReseñas
        this.atributtes = []

    }

}


class atribute{
    constructor (name){
        this.name = name
        this.variations = []
    }
}


class variation{
    constructor(name,stock,price){
        this.name = name
        this.stock = stock
        this.price = price
    }
}


// var recipiezas = new Product2(1,'recipiezas','urls','que lindo producto',5,'es un lindo producto')

// let colores = new atribute('colores')
// colores.variations.push(new variation('blue',0,1500))


// recipiezas.atributtes.push(colores)


// console.log(recipiezas.atributtes[0].variations);




// hexagonos = (id,nombre,description,info,feedback,url)


// product.addType('color')
// product.addType('units')

// this.types = [
//     {name:'color',subtypes:[
//         {name:'blue',stock:10, hex:'#1123a'},
//         {name:'red',stock:0, hex:'#11278a3'}
//     ]},

//     {name:'units',subtypes:[{name:4,value:1000},{name:6,value:1500}]},
// ]

// product.addSubType('color',{name:'blue',stock:10, hex:'#1123a'})
// product.addSubType('color',{name:'red',stock:0, hex:'#11278a3'})


// product.addSubtype('units',{name:4,value:1000})
// product.addSubtype('units',{name:6,value:1500})


export{Tienda}



