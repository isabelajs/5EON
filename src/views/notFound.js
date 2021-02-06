import header from './header.js'
import footer from './footer.js'


export default () =>{
    
    // window.document.body.prepend(header())
    // window.document.body.appendChild(footer())

    const pageNotFound = document.createElement('h1')

    pageNotFound.textContent = "Paila Perrito"


    return pageNotFound

}