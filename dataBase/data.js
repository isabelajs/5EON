import {Tienda} from './objects.js'

let seon = new Tienda()

let descriptionGeneral = ['250 Gramos','10cm Lado', '+3 colores']


seon.addProduct("recipiezas-blancas",15000,1000, 10, 
'../assets/producto_1.png', 
descriptionGeneral, 
[4, 6],
[{nombre:'azul', codigo:'#171731'}, {nombre:'amarillo', codigo:'goldenrod'}, {nombre:'rosado', codigo:'palevioletred'}]
, 5, 
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur beatae pedit quasi. Alias, nam repudiandae! Harum. Mi novio no vera esto porque no me ama' )
seon.addProduct("recipiezas-rojas",17000,1000, 99, '../assets/19.jpg' )
seon.addProduct("recipiezas-azules",20000,1500,5)



seon.findProductById(2).feedback = 4
seon.findProductById(3).feedback = 1


export {seon}


