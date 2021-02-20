import header from './home/header.js'
import footer from './home/footer.js'
import {seon} from '../../dataBase/data.js'
import productHome from './home/productHome.js'

export default () => {


    //inyectar header
    window.document.body.prepend(header())

    window.document.body.appendChild(footer())

    const view =`<section id="intro" class ="home">
            <h1 id="test" class="home__title">No más plastico</h1>
            <p class="home__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi excepturi ea dolore eius explicabo, voluptatem voluptates magnam minima quaerat veritatis cum esse odio modi fugit illo, quia accusantium. Eum.</p>
        </section>

        <section id="aboutUs" class="intro">
            <div class="intro__text">
                <h2 class="text__title">¿Quienes somos?</h2>
                <p class="text__text" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div class="intro__img"></div>
        </section>|

        <section id="proceso" class="proceso">

            <h2 class="proceso__title">¿Cómo lo hacemos?</h2>

            <div class="proceso__items">

                <div class="items-right">

                    <div class="proceso__container">

                        <div class="proceso-img"></div>

                        <div class="proceso-text">
                            <h2 class="text-title">1.Separación de residuos</h2>
                            <p class="text-text">Separan los diferentes materiales recuperables desde tu hogar</p>
                        </div>

                    </div>

                    <div class="proceso__container">

                        <span class="proceso-img"></span>

                        <div class="proceso-text">
                            <h2 class="text-title">1.Separación de residuos</h2>
                            <p class="text-text">Separan los diferentes materiales recuperables desde tu hogar</p>
                        </div>

                    </div>

                    <div class="proceso__container">

                        <span class="proceso-img"></span>

                        <div class="proceso-text">
                            <h2 class="text-title">1.Separación de residuos</h2>
                            <p class="text-text">Separan los diferentes materiales recuperables desde tu hogar</p>
                        </div>

                    </div>
                </div>

                <div class="items-left">

                    <div class="proceso__container proceso__container--reverse">

                        <span class="proceso-img"></span>

                        <div class="proceso-text">
                            <h2 class="text-title">2.Separación de residuos</h2>
                            <p class="text-text">Separan los diferentes materiales recuperables desde tu hogar</p>
                        </div>

                    </div>

                    <div class="proceso__container proceso__container--reverse">

                        <span class="proceso-img"></span>

                        <div class="proceso-text">
                            <h2 class="text-title">2.Separación de residuos</h2>
                            <p class="text-text">Separan los diferentes materiales recuperables desde tu hogar</p>
                        </div>

                    </div>

                    <div class="proceso__container proceso__container--reverse">

                        <span class="proceso-img"></span>

                        <div class="proceso-text">
                            <h2 class="text-title">2.Separación de residuos</h2>
                            <p class="text-text">Separan los diferentes materiales recuperables desde tu hogar</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <section id="productos" class="productos">

            <h2 class="productos__title">Productos</h2>

            <div class="productos__contenedor c-scroll">

                <div class="productos-carrusel">
                    
                </div>
            </div>

            <p class="productos__descripcion">Estos productos estan hechos a partir de plastico 100% reciclado.</p>

        </section>

        <section class="photos">
            <div class="photos__hashtag">#Nomasplastico</div>
            <div class="photos__container">
                <div class="container-img img-left"><img src="../assets/photos.jpg" alt=""></div>
                <div class="container-img"><img src="../assets/photos.jpg" alt=""></div>
                <div class="container-img img-left"><img src="../assets/photos.jpg" alt=""></div>
                <div class="container-img "><img src="../assets/photos.jpg" alt=""></div>
            </div>
        </section>`

    const landingPage = document.createElement('div')
    landingPage.classList.add('l-landing')
    landingPage.innerHTML = view;


    const carrousel = landingPage.querySelector('.productos-carrusel')

    seon.products.forEach(element=>{
        const product = productHome(element)
        carrousel.appendChild(product)
    })


    landingPage.querySelectorAll('.producto').forEach(
        product => {
            product.onclick = () => {window.location.hash = `#/product/${product.dataset.id}`}
        }
    )

    return landingPage
}


const routeProduct = (id) => {

}
