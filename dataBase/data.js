import {Tienda} from './objects.js'


let seon = new Tienda()

let descriptionGeneral = ['250 <br/> Gramos','10cm <br/>  Lado', '+3  <br/>  colores']


seon.addProduct("Recipiezas",1000, 
'./assets/producto_1.png', 
descriptionGeneral, 
5, 
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur beatae pedit quasi. Alias, nam repudiandae! Harum. Mi novio no vera esto porque no me ama' )

seon.addUnitType(1,4,4000)
seon.addUnitType(1,6,6000)
seon.addColorType(1,'blue','#171731',10)
seon.addColorType(1,'yellow','goldenrod',10)
seon.addColorType(1,'pink','palevioletred',10)

seon.supplyProduct(1,'blue',8)
seon.supplyProduct(1,'pink',12)
seon.supplyProduct(1,'yellow',6)


seon.addProduct("Portavasos",1000,
 './assets/19.jpg',
 descriptionGeneral,
 4,
 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur beatae pedit quasi. Alias, nam repudiandae! Harum. Mi novio no vera esto porque no me ama' )

seon.addUnitType(2,4,4000)
seon.addUnitType(2,6,6000)
seon.addColorType(2,'blue','#171731',10)
seon.addColorType(2,'yellow','goldenrod',10)
seon.addColorType(2,'pink','palevioletred',10)


seon.addProduct("Forros ecologicos",1000,
 './assets/forros.jpg',
 descriptionGeneral,
 5,
 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur beatae pedit quasi. Alias, nam repudiandae! Harum. Mi novio no vera esto porque no me ama' )

seon.addUnitType(3,1,25000)
seon.addColorType(3,'green','#06D6A0',10)
seon.addColorType(3,'yellow','#ffba08',10)
seon.addColorType(3,'pink','palevioletred',10)
seon.addColorType(3,"black", "#000000", 8)
seon.addColorType(3,"red", "#d90429", 10)

export {seon}


