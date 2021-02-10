import home from '../views/home.js'
import notFound from '../views/notFound.js'
import shopPage from '../views/shopPage.js'

const routes = [
    {
        path: '',
        template: home,
    },
    {
        path: 'product',
        template: shopPage,
    },
    {
        path: '404',
        template: notFound,
    }
];


export {routes}

