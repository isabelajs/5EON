

//{message:'xxxxx',type:'error,good'}
const cModalInfo = (message,type) =>{



    const cModal = document.createElement('div')
    cModal.classList.add('c-modalInfo')
    cModal.classList.add(`c-modalInfo--${type}`)
    
    const imgUrl = type == 'error' ? '' : ''
    let title; 

    switch(type){
        case 'good':
            title = 'Good Job'
            break
        case 'warning':
            title = 'Warning'
            break
        case 'error':
            title = 'Error'
            break
    }

    const view = `  
                    <div class="l-modalInfo__container">
                        <div class="l-modalInfo__header"> 
                            <p> ${title} </p>  
                            <i id="closeModal" class="fas fa-times" ></i>
                        </div>

                        <div class="l-modalInfo__content"> 
                                                    
                            <img src="./" alt="">
                            <h3 class="c-modalInfo__title">${title}</h3>
                            <p class="c-modalInfo__message">${message}</p>

                            <div id="acceptModal" class="c-modalInfo__buttonOk c-button c-button--green c-button--small">OK</div>

                        </div>


                    </div>`


    cModal.innerHTML = view

    const btnCloseModal = cModal.querySelector('#closeModal')
    const btnAcceptModal = cModal.querySelector('#acceptModal')


    btnCloseModal.addEventListener('click',closeModal)
    btnAcceptModal.addEventListener('click',closeModal)

        
    //hide the elements in the window
    document.body.style.overflow = 'hidden'

    
    function closeModal(){
        document.body.style.overflow = ''
        cModal.remove()
        console.log('cerrado')

    }


    return cModal

}



// document.body.appendChild(cModalInfo('todo salio a la perfeccion puede seguir chupando pija','error'))

export {cModalInfo}


