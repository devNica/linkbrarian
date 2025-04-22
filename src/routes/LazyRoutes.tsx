import { lazy } from "react";

const LazyAuthPage = lazy(() => import("../pages/auth/AuthPage"))
const LazyHomePage = lazy(() => import("../pages/home/HomePage"))
const LazyCategoryRegistrationPage = lazy(() => import("../pages/categories/CategoryRegistrationPage"))


export {
    LazyAuthPage,
    LazyHomePage,
    LazyCategoryRegistrationPage
}