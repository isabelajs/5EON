import home from '../views/home.js'
import {router} from './index-router.js'


 router(window.location.hash)

window.addEventListener("hashchange",()=>{
    console.log(window.location.hash)
    router(window.location.hash)
})

