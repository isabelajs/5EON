export default () =>{

    const footer = document.createElement('footer')
    footer.classList.add('footer')
    
    const waMessage = (number,mensaje) =>{
        return `https://wa.me/57${number}?text=${mensaje}`
    }

    const view = `<div class="footer__icons">
                    <a  id="facebook" class="c-icon c-icon--big" href='https://www.facebook.com/5EONN-105857667715019'><i class="fab fa-facebook"></i></a>
                    <a id="instagram" class="c-icon c-icon--big" href='https://www.instagram.com/5eonn/'><i class="fab fa-instagram"></i></a>
                    <a class="c-icon c-icon--big" href='${waMessage('3013437122','Hola! Me gustaría conocer más acerca de sus productos')}'><i class="fab fa-whatsapp"></i></a>
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
