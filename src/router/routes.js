import home from '../views/home.js'
import notFound from '../views/notFound.js'
import product from '../views/product.js'

const routes = [
    {
        path: '',
        template: home,
    },
    {
        path: 'product',
        template: product,
    },
    {
        path: '404',
        template: notFound,
    }
];


export {routes}

