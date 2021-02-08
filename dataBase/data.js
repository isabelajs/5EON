import {Tienda} from './objects.js'

let seon = new Tienda()

seon.addProduct("recipiezas-blancas",15000,1000,10)
seon.addProduct("recipiezas-rojas",17000,1000,99)
seon.addProduct("recipiezas-azules",20000,1500,5)


seon.findProductById(1).urlImg = '../assets/prod.jpg';
seon.findProductById(2).urlImg = '../assets/prod.jpg';
seon.findProductById(3).urlImg = '../assets/prod.jpg';


seon.findProductById(1).feedback = 3
seon.findProductById(2).feedback = 4
seon.findProductById(3).feedback = 1

export {seon}


