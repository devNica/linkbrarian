import { lazy } from "react";

const LazyAuthPage = lazy(() => import("../pages/auth/AuthPage"))
const LazyHomePage = lazy(() => import("../pages/home/HomePage"))
const LazyCategoryRegistrationPage = lazy(() => import("../pages/categories/CategoryRegistrationPage"))
const LazyCategoryLinksPage = lazy(() => import("../pages/categories/CategoryLinksPage"))


export {
    LazyAuthPage,
    LazyHomePage,
    LazyCategoryRegistrationPage,
    LazyCategoryLinksPage
}