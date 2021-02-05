import home from '../views/home.js'
import header from '../views/header.js'

const app = document.querySelector('body')


const router = (route) =>{
    app.innerHTML = ''
    switch(route){
        case '':
            app.appendChild(home())
        case '#/':
            app.appendChild(home())
            return console.log("pepe")
        case '#/header':
            return app.appendChild(header())
    
        default:
            console.log("404!!")
            

    }
}

export {router}