import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import BooksPage from "../pages/BooksPage/BooksPage";

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
        path: '/books',
        page: BooksPage,
        isShowHeader: true,
    },

    {
        path: '*',
        page: NotFoundPage
    },
]