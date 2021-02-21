import {seon} from '../../dataBase/data.js'
import {cSummaryProducts} from './payment/summaryProducts.js'
import {cFormPayment} from './payment/formPayment.js'

export default ()=>{

    const cPayment = document.createElement('div')
    cPayment.classList.add('section__page')

    cPayment.appendChild(cSummaryProducts())
    cPayment.appendChild(cFormPayment())

    return cPayment
}

