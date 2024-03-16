import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductPages from "../pages/ProductsPage/ProductPages";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },

    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true,
    },

    {
        path: '/products',
        page: ProductPages,
        isShowHeader: true,
    },

    {
        path: '*',
        page: NotFoundPage
    },
]