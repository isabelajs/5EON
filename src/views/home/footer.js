export default () =>{

    const footer = document.createElement('footer')
    footer.classList.add('footer')

    const view = `<div class="footer__icons">
                    <div  id="facebook" class="c-icon c-icon--big"><i class="fab fa-facebook"></i></div>
                    <div id="instagram" class="c-icon c-icon--big"><i class="fab fa-instagram"></i></div>
                    <div class="c-icon c-icon--big"><i class="fab fa-whatsapp"></i></div>
                </div>

                <nav class="footer__links">
                    <ul class="container__links">
                        <li ><a  class="link" href="">Envíos</a></li>
                        <li ><a  class="link" href="">Cambios y Garantías</a></li>
                        <li ><a  class="link" href="">Contacto</a></li>
                        <li ><a  class="link" href="">Términos y condiciones</a></li>            
                    </ul>
                </nav>`

    footer.innerHTML = view;

    return footer

}
