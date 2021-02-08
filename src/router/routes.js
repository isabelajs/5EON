import home from '../views/home.js'
import notFound from '../views/notFound.js'
import shoopPage from '../views/shoopPage.js'

const routes = [
    {
        path: '',
        template: home,
    },
    {
        path: 'product',
        template: shoopPage,
    },
    {
        path: '404',
        template: notFound,
    }
];


export {routes}

