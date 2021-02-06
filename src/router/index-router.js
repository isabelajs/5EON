import home from '../views/home.js'
import header from '../views/header.js'
import footer from '../views/footer.js'

const app = document.querySelector('body')


const router = (route) =>{
    app.innerHTML = '';


    if ( route == ""){

        app.appendChild(header())
        app.appendChild(home())
        app.appendChild(footer())
    
    } else if (route == "#/"){

    } else if (route == '#/'){

    }
            
}
 

export {router}