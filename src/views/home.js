import header from "./home/header.js";
import footer from "./home/footer.js";
import { seon } from "../../dataBase/data.js";
import productHome from "./home/productHome.js";
import { componentCart } from "./shopPage/cart/controllerCart.js";

export default () => {
  //inyectar header
  const cHeader = header();
  const cFooter = footer();

  document.body.prepend(cHeader);
  document.body.appendChild(cFooter);

  //BUG so slow when charge the cart maybe is for the render....

  const landingPage = document.createElement("div");
  landingPage.classList.add("l-landing");

  const view = `<section id="intro" class ="home">
                        <h1 id="test" class="home__title">No más plástico</h1>
                        <p class="home__text">Alargamos el tiempo de vida de utilización del plástico, transformándolo en hermosas piezas de decoración.</p>
                    </section>

                    <section id="aboutUs" class="intro">
                        <div class="intro__text">
                            <h2 class="text__title">¿Quienes somos?</h2>
                            <p class="text__text" >Somos un equipo de profesionales enfocados en alargar el tiempo de vida de utilización del plástico, transformándolo en hermosas piezas de decoración o elementos útiles para nuestra vida cotidiana.</p>
                        </div>
                        <div class="intro__img"></div>
                    </section>

                    <section id="proceso" class="proceso">

                        <h2 class="proceso__title">¿Cómo lo hacemos?</h2>

                        <div class="proceso__items">

                            <div class="items-right">

                                <div class="proceso__container">

                                    <div class="proceso-img"></div>

                                    <div class="proceso-text">
                                        <h2 class="text-title">1.Separación de residuos</h2>
                                        <p class="text-text">La comunidad separan los diferentes materiales recuperables desde su hogar</p>
                                    </div>

                                </div>

                                <div class="proceso__container">

                                    <span class="proceso-img"></span>

                                    <div class="proceso-text">
                                        <h2 class="text-title">2.Recolección</h2>
                                        <p class="text-text">La asociación correspondiente a la zona, recolectara todos los elementos que puedan ser aprovechables</p>
                                    </div>

                                </div>

                                <div class="proceso__container">

                                    <span class="proceso-img"></span>

                                    <div class="proceso-text">
                                        <h2 class="text-title">3.Clasificación y limpieza</h2>
                                        <p class="text-text">Los materiales se separan según su composición y color para pasar al proceso de remoción de suciedad</p>
                                    </div>

                                </div>
                            </div>

                            <div class="items-left">

                                <div class="proceso__container proceso__container--reverse">

                                    <span class="proceso-img"></span>

                                    <div class="proceso-text">
                                        <h2 class="text-title">4.Trituración</h2>
                                        <p class="text-text">El plástico recuperado pasa por el proceso de trituración de acuerdo a su tipo y color</p>
                                    </div>

                                </div>

                                <div class="proceso__container proceso__container--reverse">

                                    <span class="proceso-img"></span>

                                    <div class="proceso-text">
                                        <h2 class="text-title">5.Termofijados</h2>
                                        <p class="text-text">Se transforma el plástico triturado en diferentes productos por medio de una máquina de inyección</p>
                                    </div>

                                </div>

                                <div class="proceso__container proceso__container--reverse">

                                    <span class="proceso-img"></span>

                                    <div class="proceso-text">
                                        <h2 class="text-title">6.Producto</h2>
                                        <p class="text-text">El producto pasa por el proceso de eliminación de imperfeciones y es enviado a su destino</p>
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
                            <div class="container-img img-left"><img src="./assets/photos-hashtag/imagen-1.png" alt=""></div>
                            <div class="container-img"><img src="./assets/photos-hashtag/imagen-2.png" alt=""></div>
                            <div class="container-img img-left"><img src="./assets/photos-hashtag/imagen-3.png" alt=""></div>
                            <div class="container-img "><img src="./assets/photos-hashtag/imagen-4.png" alt=""></div>
                        </div>
                    </section>`;

  landingPage.innerHTML = view;
  landingPage.appendChild(componentCart());

  const carrousel = landingPage.querySelector(".productos-carrusel");
  const carrouselContenedor = landingPage.querySelector(
    ".productos__contenedor"
  );
  let mousePress = false;
  let posX = 0;

  seon.products.forEach((element) => {
    const product = productHome(element);
    product.onclick = () => {
      window.location.hash = `#/product/${product.dataset.id}`;
    };
    carrousel.appendChild(product);
  });

  //activate for move when press the mouse on carrousel
  carrousel.addEventListener("mousedown", (e) => {
    mousePress = true;
    posX = e.clientX;
  });

  //deactivate when mouse up in all the page
  landingPage.addEventListener("mouseup", () => {
    mousePress = false;
  });

  //move the carrousel only if mouse if moving
  carrousel.addEventListener("mousemove", (e) => {
    if (mousePress) {
      carrouselContenedor.scrollLeft += posX - e.clientX;
      posX = e.clientX;
    }
  });

  return landingPage;
};
